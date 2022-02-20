import React, { useEffect, useState } from 'react';
import classes from './ProjectInfos.module.css';
import Comments from './Comments/Comments';
import CommentInput from './Comments/CommentInput';
import ProjectDescription from './ProjectDescription';
import ProjectDate from './ProjectDate';
import ProjectTitle from './ProjectTitle';
import { getAuth } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { getDataByPath } from '../../firebase/utils/db';
import { BLANK_REGEX } from '../../constants';
import { makePath } from '../../utils/string';

const ProjectInfos = ({ infos }) => {
  const auth = getAuth();
  const [, , category, detailCategory, projectName] = useLocation().pathname.split('/');
  const [comments, setComments] = useState([]);
  const [writer, setWriter] = useState('');

  useEffect(() => {
    setComments(infos?.comments);
  }, [infos?.comments]);
  useEffect(() => {
    loadProjectWriter();
  }, [infos?.uid]);

  const loadProjectWriter = async () => {
    const userName = await getDataByPath(makePath(`users/${infos?.uid}`));
    setWriter(userName);
  };
  const reloadComments = async () => {
    setComments(
      await getDataByPath(
        makePath(`projects/${category}/${detailCategory}/${projectName}/comments`),
      ),
    );
  };

  return (
    <div className={classes.infos}>
      <ProjectTitle title={infos?.name} writer={writer} />
      <ProjectDate date={infos?.date} />
      <ProjectDescription description={infos?.description} />
      <Comments
        reloadHandler={reloadComments}
        comments={comments ? Object.entries(comments) : []}
      />
      {auth.currentUser && <CommentInput reloadHandler={reloadComments} />}
    </div>
  );
};

export default ProjectInfos;
