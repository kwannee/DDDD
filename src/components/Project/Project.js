import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './Project.module.css';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const Project = ({ image }) => {
  const userName = 'User';
  const { category, name } = useParams();
  return (
    <div className={classes.wrapper}>
      <div className={classes.projectLayout}>
        <div className={classes.imageController}>
          <p>Previous</p>
          <p>/</p>
          <p>Next</p>
          <p>(1 of 2)</p>
          <div className={classes.modifyProject}>■</div>
        </div>
        <div className={classes.contents}>
          <div className={classes.images}></div>
          <div className={classes.infos}>
            <div className={classes.names}>
              <p className={classes.name}>한국 이름</p>
              <p className={classes.name}>Eng Name</p>
              <p>with ooo</p>
            </div>
            <div className={classes.date}>
              <p>2022-01-06</p>
            </div>
            <div className={classes.paragraph}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatum nisi.
                Voluptatem fuga et sint, excepturi cumque fugiat repellat quod laborum atque in
                quidem ipsum, ut aperiam architecto tempore voluptatum!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officia, voluptatum nisi. Voluptatem fuga et sint,
                excepturi cumque fugiat repellat quod laborum atque in quidem ipsum, ut aperiam
                architecto tempore voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Officia, voluptatum nisi. Voluptatem fuga et sint, excepturi cumque fugiat
                repellat quod laborum atque in quidem ipsum, ut aperiam architecto tempore
                voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                voluptatum nisi. Voluptatem fuga et sint, excepturi cumque fugiat repellat quod
                laborum atque in quidem ipsum, ut aperiam architecto tempore voluptatum!Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Officia, voluptatum nisi. Voluptatem
                fuga et sint, excepturi cumque fugiat repellat quod laborum atque in quidem ipsum,
                ut aperiam architecto tempore voluptatum!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Officia, voluptatum nisi. Voluptatem fuga et sint, excepturi
                cumque fugiat repellat quod laborum atque in quidem ipsum, ut aperiam architecto
                tempore voluptatum!
              </p>
            </div>
            <div className={classes.comments}>
              <div className={classes.comment}>
                Name 22.01.03
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, minus.
                  Architecto, nihil adipisci tempora amet, minus voluptates veniam minima rerum,
                  magni officiis alias perspiciatis eius. Veritatis magni eligendi rerum possimus.
                </p>
              </div>
            </div>
            <div className={classes.commentInput}>
              {userName}
              <div className={classes.input}>
                <TextArea
                  bordered={false}
                  placeholder="Comment"
                  autoSize={{ minRows: 2, maxRows: 2 }}
                />
                <div className={classes.submit}>▼</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.projectController}>
          <p>Previous</p>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
