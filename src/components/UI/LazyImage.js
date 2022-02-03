import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, className, height }) => {
  // state
  const [isLoading, setIsLoading] = useState(false); // 실제 화면에 보여지고 있는지 여부를 확인

  // ref
  const imgRef = useRef(null); // 이미지 태그 요소
  const observer = useRef(); // IntersectionObserver 변수

  // useEffect
  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionOberserver); // 인스턴스 생성
    imgRef.current && observer.current.observe(imgRef.current); // 이미지 태그 관찰 시작
  }, []);

  // IntersectionObserver 설정
  const intersectionOberserver = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰되고 있는 entry가 보여지게 된 다면
        io.unobserve(entry.target); // 관찰 종료
        setIsLoading(true); // 로딩 체크
      }
    });
  };

  return (
    // 화면에 보여지기 전이라면 NoImage, 화면에 보여지고 있다면 src에 해당하는 이미지
    <>
      {isLoading ? (
        <img className={className} style={{ height: `${height}` }} src={src} alt="project" />
      ) : (
        <div
          className={className}
          ref={imgRef}
          style={{ backgroundColor: 'lightgray', height: `${height}` }}
        ></div>
      )}
    </>
  );
};

export default LazyImage;
