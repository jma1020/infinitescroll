# 레포지토리 개요
기존 scroll 이벤트(reflow,layout이슈)가 아닌Intersection Observer를 사용한 무한스크롤 구현한 영화웹

# 추가구현(예정)
- 상세페이지 (첫페이지는 빌드시 HTML생성)
- 기존 intersection observer 로직을 커스텀 hook으로 분리
- 추가로 데이터를 가져올 시 로딩 중 이미지 추가

# 마주한 이슈
- Next 에서 Wep API 동작으로 인한 이슈(SSR)
- 마지막 요소 threshold: 1 지정 시 미지의 영역으로 인한 0.02(2%)가 충족되지 않는 이슈

