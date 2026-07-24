// src/firebaseConfig.js
//
// [초보자를 위한 설명]
// 여기에는 Firebase 콘솔 > 프로젝트 설정 > "일반" 탭 하단의
// "웹 앱" 섹션에서 복사한 firebaseConfig 값만 붙여넣습니다.
// 이 값은 공개되어도 되는 "클라이언트용 식별자"이며,
// 서비스 계정 키(비밀 키)와는 전혀 다릅니다. (서비스 계정 키는 절대 사용하지 않음)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ▼▼▼ 아래 객체를 본인의 firebaseConfig 값으로 교체하세요 ▼▼▼
const firebaseConfig = {
  apiKey: "여기에_본인_apiKey_붙여넣기",
  authDomain: "여기에_본인_authDomain_붙여넣기",
  projectId: "여기에_본인_projectId_붙여넣기",
  storageBucket: "여기에_본인_storageBucket_붙여넣기",
  messagingSenderId: "여기에_본인_messagingSenderId_붙여넣기",
  appId: "여기에_본인_appId_붙여넣기",
};
// ▲▲▲ 여기까지 교체 ▲▲▲

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
