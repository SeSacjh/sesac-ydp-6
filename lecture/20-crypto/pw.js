// banana / 1234 회원가입 시도
// banana / asdfasdfasdf 데이터베이스 저장
// banan / 1234 로그인 시도
// 1234를 단방향 암호화하면 (asdfasdfasdf) 암호화한 값으로
// 암호화되어 저장된 회원가입 비번이랑 암호화된 로그인 비번이랑 비교
// 비밀번호를 찾기 시도
// 1. 비밀번호를 변경하게 하는 사이트
// 2. 비밀번호를 찾아주는 사이트
// ----------------
// 양방향
// ex. 사물함에 물건을 보관하고 잠그면(암호화) 안전하게 물건을 보호, 필요할 때 열쇠로 사물함을 열어서(복호화) 물건을 다시 꺼냄
// - 대칭키: 암호화/복호화할 때 쓰는 키가 동일 / 처리 속도 빠른 / 키 공유가 안전하게 이뤄져야 함
// 	ex. 같은 열쇠로 열고 잠글 수 있지만, 열쇠를 잘 보관해야만 함  (분실시 누구나 열수 있게 됨)
// - 공개키(비대칭키): 두 개의 키를 가지고 암호화/복호화 == 암호화와 복호화할 때 쓰이는 키가 다름
// 	"공개키"로 암호화 / "개인키"로 복호화
// 	대칭키에서는 키 공유가 안전하게 이뤄져야 하지만, 키 교환 문제 해결 가능
// 	대치킹 암호화보다는 처리 속도 느린편
// 	ex. 우체통
// 	누구나 편지(데이터)를 넣을 수 있지만 -> 공개키로 암호화
// 	우체통 열쇠를 가진 사람만 우체통을 열어서 편지(데이터)를 읽을 수 있다 -> 개인키로 복호화