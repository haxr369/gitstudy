# 7주차 솔 과제 A 제출용
- SSR로 상세 페이지 만들어보기
  - /src/app/api 작업
  - /src/app/room/components.SingleRoom 작업
  - /src/app/room/componentsRoomCollection 작업  
  - 매 기업마다 다이나믹 라우팅 설정
  - fetch에 cache 조건들 적용하면서 페이지 캐싱 써보기
1. DB와 페이지가 동일한 경우, revalidate 전
<img src="https://github.com/haxr369/gitstudy/assets/53365713/79020553-1bb1-46e6-9a32-ceafe5a9da86" alt="1번 사진" style="width:600px;"/>

2. DB와 페이지가 다른 경우, 캐시된 페이지 응답
<img src="https://github.com/haxr369/gitstudy/assets/53365713/f67eba9b-ed16-4e54-9f64-a78e42284713" alt="2번 사진" style="width:600px;"/>

3. revalidate가 진행되어 새로운 페이지가 응답
<img src="https://github.com/haxr369/gitstudy/assets/53365713/68fe16dc-680c-43b6-85ea-7dfabc3a4613" alt="3번 사진" style="width:600px;"/>
