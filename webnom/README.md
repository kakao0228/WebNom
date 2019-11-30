# App1: layout, pug, route 이해하기

## 1. 필요한 기본 유틸 설치: Express Generator, Nodemon
```
# express 프로젝트 기본 골격 생성 프로그램
npm install -g express-generator

# 서버 자동 재시작 도구
npm install -g nodemon
```

## 2. 프로젝트 생성
Express generator를 이용하여
```
express ex01 -v pug -c sass --git
# Layout 엔진 pug 사용
# CSS대신 SASS 사용
# .gitignore 파일 자동 추가
```

## 3. 디렉토리에 들어가기
```
cd ex01
ls -alF
code .       # 자기가 이용하는 에디터를 실행.
```

## 4. 기본 패키지 인스톨
- npm install을 하면 로컬(현재 디렉토리)에 node package를 인스톨 한다.
- '--save' 옵션은 package.json에 해당 내용을 저장하게 한다.
- '--save-dev' 옵션은 package.json의 개발용 의존성 부분에 해당 내용을 저장하게 한다.
  즉, 이 패키지는 사이트의 개발시에 필요하고, 실제 서비스 운영에는 필요없다는 뜻이다.
```
# express generator가 만들어둔 패키지 셋팅 인스톨
npm install

```

### node-sass-middleware가 다음 프로그램들에 dependency가 있을 수 있음
- Python
- Visual Studio Community Edition (Windows)
- XCode command line tool (Mac)

### node-gyp를 설치하는 방법 (Windows)
참고: https://github.com/nodejs/node-gyp#on-windows
1. 최신 버전의 Python을 설치한다. (3.7이하)
2. 다음 2가지 중 한가지를 설치한다.
(1) 관리자 권한으로 승격된 cmd 창에서 
```
npm install --global --production windows-build-tools
```
(2) Visual Studio 2017 Community 를 설치한다. 
(설치 중 반드시 "Desktop development with C++" 를 선택한다.)
설치 주소: https://visualstudio.microsoft.com/pl/thank-you-downloading-visual-studio/?sku=Community

설치 완료후 cmd 창에서
```
npm config set msvs_version 2017
```

### node-gyp를 설치하는 방법 (Mac)
1. 최신 버전의 Python을 설치한다. (3.7이하)
2. 다음 명령을 통해 XCode Command Line Tool을 설치한다.
```
xcode-select --instal
```

### 패키지 인스톨 중에 뭔가 이상해졌을 때, 패키지 전체를 지우고 새로 인스톨하기
```
rm -rf node_modules
rm package-lock.json
npm cache clean
npm install
```

## 5. 프로그램 시작
```
npm start
```


## 6. nodemon
```
# 참고: nodemon을 이용하면 프로그램이 변경될 때 서버 자동 재실행 할 수 있음.
# package.json 수정
  ...
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  ...
```


## 7. Client용 package CDN으로 연결: views/layout.pug
```
    ...
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css')
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
    ...
    script(src='https://code.jquery.com/jquery-3.2.1.min.js')
    script(src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js')
    ...
```
