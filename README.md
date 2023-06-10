# MODART
## <일상을 공유하는 웹 (게시판)사이트>

### 1.프로젝트 소개
> 모드아트는 프랑스어로 "모드"는 유행 및 패션을 지칭하고, "아트"는 영어직역 그대로 예술을 의미합니다. 모드아트는 유행과 패션에 민감한 현대인들에게 본인의 예술감각(사진, 패션)을 뽐낼 수 있고, 하루를 쉬어 갈 수 있는 페이지를 제공하고자 만들었습니다.

------

### 2. 프로젝트 구조
> 사용 기술 : react(vite) / styled-components / firebase / redux-toolkit

- 폴더 구조는 src 폴더 안에 assets , components, styles, store, firebase로 구성되어있고
- assets > 이미지,데이터
- components > 자주사용될 컴포넌트
- styles > styled-componets 라이브러리를 이용함으로써 글로벌 스타일 / 리셋 스타일 / 자주 사용될 스타일들을 담고있습니다.
- store > 리덕스 툴킷의 스토어 폴더고 하위폴더로 reducer가 있습니다.
- firebase > 서버 및 데이터베이스용 firebase 기본 설정이 있습니다. 


-----------

### 3. 프로젝트 이미지
1. 메인 페이지
![메인페이지](assets/images/readme/main.png)
2. DailyLook
![데일리룩](assets/images/readme/daily.png)
3. Photo
![사진](assets/images/readme/photo.png)
4. Account
![계정관리](assets/images/readme/account.png)

> 헤더에 navigation bar로 Home / DailyLook / Photo / TodayStory / Qna / 계정관리 로 구성되어있습니다.


<모드아트 링크>
[모드아트](https://llvovll89.github.io/modart/)