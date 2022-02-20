export const CATEGORIES = ['Dream', 'Design', 'Digital', 'Detail', 'Drawing & Sketch', 'D-etc'];
export const DETAIL_CATEGORIES = {
  Dream: ['Religion', 'Philosophy', 'Thought', 'Mythology', 'Aesthetics', 'Etc'],
  Design: ['Architecture', 'Urban', 'Interior', 'Furniture', 'Graphic&color', 'Etc'],
  Digital: [
    'Sketch up',
    'Auto cad',
    'Bim (revit)',
    'Rendering',
    'Rhino & grasshoper',
    '3d printer',
    'Youtube',
    'Etc',
  ],
  Detail: ['Architecture', 'Interior', 'Material', 'Etc'],
  'Drawing & Sketch': [
    'Architecture',
    'Architects',
    'Interior',
    'Art & artist',
    'Calligrahpy',
    'Etc',
  ],
  'D-etc': ['Culture', 'Books', 'Travel & excursion', 'Movies', 'Exhibition', 'Music', 'Etc'],
};
export const DESCRIPTION = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatum nisi.
Voluptatem fuga et sint, excepturi cumque fugiat repellat quod laborum atque in quidem
ipsum, ut aperiam architecto tempore voluptatum!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Officia, voluptatum nisi. Voluptatem fuga et sint, excepturi cumque fugiat
repellat quod laborum atque in quidem ipsum, ut aperiam architecto tempore voluptatum!Lorem
ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptatum nisi. Voluptatem fuga
et sint, excepturi cumque fugiat repellat quod laborum atque in quidem ipsum, ut aperiam
architecto tempore voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
Officia, voluptatum nisi. Voluptatem fuga et sint, excepturi cumque fugiat repellat quod
laborum atque in quidem ipsum, ut aperiam architecto tempore voluptatum!Lorem ipsum dolor
sit amet consectetur adipisicing elit. Officia, voluptatum nisi. Voluptatem fuga et sint,
excepturi cumque fugiat repellat quod laborum atque in quidem ipsum, ut aperiam architecto
tempore voluptatum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
voluptatum nisi. Voluptatem fuga et sint, excepturi cumque fugiat repellat quod laborum
atque in quidem ipsum, ut aperiam architecto tempore voluptatum!`;
export const NAME_ERROR = '이름을 입력해주세요.';
export const DESCRIPTION_ERROR = '설명을 입력해주세요.';
export const FILES_ERROR = '파일을 입력해주세요.';

export const EMPTY_EMAIL_ERROR = 'E-Mail을 입력해주세요.';
export const MIN_PASSWORD_LENGTH = 6;
export const WRONG_PASSWORD_FOTMAT_ERROR = `비밀번호를 ${MIN_PASSWORD_LENGTH}자리 이상 입력해주세요.`;
export const WRONG_EMAIL_FORMAT = '잘못된 이메일 형식입니다.';
export const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const NOT_EXIST_USER_ERROR = '존재하지 않는 아이디입니다.';
export const WRONG_PASSWORD_ERROR = '비밀번호가 틀렸습니다.';
export const EXIST_USER_ERROR = '이미 존재하는 아이디입니다.';
export const EMPTY_CETEGORY_ERROR = '카테고리를 선택해주세요.';
export const WRONG_CODE_ERROR = '잘못된 가입 코드입니다.';

export const BLANK_REGEX = /\%20/gi;

export const CATEGORY_OPTIONS = CATEGORIES.map((category, idx) => (
  <option key={category + idx} value={category}>
    {category}
  </option>
));
export const DETAILCATEGORY_OPTIONS = (category) =>
  DETAIL_CATEGORIES[category].map((detail, idx) => (
    <option key={detail + idx} value={detail}>
      {detail}
    </option>
  ));
