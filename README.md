<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</div>

<br />

<div align="center">
  <h3 align="center">4주차 과제 - 퍼포먼스바이 TBWA</h3>
  <p align="center">
    vanilla javascript를 이용해 <a href="https://kukka.kr/">꾸까</a> 메인 페이지를 클론한 과제입니다.
    <br />
    <br />
    <a href="https://flamboyant-ptolemy-2b58a6.netlify.app/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>김재원</b></td>
  </tr>
  <tr>
    <td align="center"><b>Image Carousel 및 배너 영역 구현</b></td>
    <td align="center"><b>GNB 및 YouTube Iframe 영역 구현</b></td>
    <td align="center"><b>Footer 및 Modal 영역 구현</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 구현한 기능

- [x] GNB 및 Image Carousel 영역에 반응형 레이아웃 구현

- [x] GNB 영역

  - [x] 스크롤 이동 시 상단에 고정
  - [x] 메뉴 hover 시 글자 하단에 밑줄 생성
  - [x] 하단 영역 그림자 효과 부여
  - [x] 메뉴 아이템 중 '플라워클래스' 클릭 시 해당 영역으로 스크롤 이동

- [x] YouTube Iframe 영역

- [x] Image Carousel 영역

  - [x] 이미지 hover 시 줌 효과
  - [x] 버튼 hover 시 밑줄 혹은 color 변경 효과
  - [x] 좌우 화살표 버튼 클릭 시 이미지, 가격, 태그 교체

- [x] 배너 영역

  - [x] hover 시 이미지 줌 효과

- [x] Footer 영역

  - [x] Bootstrap 쓰지 않고 순수 CSS로 반응형 레이아웃 구현
  - [x] SNS 아이콘 클릭 시 새 창에서 링크 열기

- [x] Modal 영역

  - [x] 이미지 클릭 시 타 사이트로 이동하는 기능 구현
  - [x] 체크박스 및 버튼 클릭 시 Modal을 숨김 처리하는 이벤트 구현
  - [x] Cookie 설정을 활용하여 '오늘 하루 보지 않기' 기능 구현

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

1. Repo를 clone한다.
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. NPM pakage들을 설치한다.
   ```sh
   npm install
   ```
3. CORS 해결을 위해 http-server 등을 이용해 프로젝트를 실행한다.
   ```sh
   npm install http-server
   http-server
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
.
├── index.html
└── src
    ├── assets       # 이미지 및 폰트
    ├── css
    │   ├── GNB      # 각 컴포넌트별로 구분한 css 파일들
    │   ├── Video
    │   ├── Carousel
    │   └── ...
    └── js
        ├── GNB      # 바닐라 JS로 구현한 웹 컴포넌트들
        ├── Video
        ├── Carousel
        └── ...
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
