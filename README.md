# 개발환경 설정

## 유용한 vscode 플러그

- Auto Close Tag: 여는 태그를 만들면, 닫는 태그를 자동적으로 생성
- Auto Rename Tag: 마크업 앞 혹은 뒤를 수정하면 그에 대응하는 마크업 뒤 혹은 앞을 자동으로 수정
- Prettier — Code formatter : 띄어쓰기, 공백 자동으로 처리해줍니다.
  > > 설치후에 메뉴 code>preferences>settings에서 'Editor: Default Formatter'으로 검색후에 나오는 selectbox의 항목을 'None'에서 'Pretty Formatter로 변경'
  > > 'format on save' 로 검색해서 해당항목을 체크하여 저장시에 formatting이 자동적으로 적용
- Eslint
- Material Icon Theme: 소스트리의 파일 앞에 아이콘을 직관적으로 보여줌
- Tailwind CSS IntelliSense: 테일윈드 인텔리센스

# 백앤드 서버 Proxy설정

- package.json의 다음 항목의 URL설정
  "proxy": "http://localhost:8080",

## 명령어

- 라이브러리 설치

  > `npm install`

- 프로젝트 폴더에서 개발모드로 app 실행하기

  > `npm start`

- 빌드하기
  > `npm run build`
