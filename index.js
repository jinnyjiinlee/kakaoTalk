// auth.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient('https://[프로젝트주소].supabase.co', '공개키');

window.login = async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('로그인 실패: ' + error.message);
    return;
  }

  // 로그인 성공
  localStorage.setItem('accessToken', data.session.access_token);
  window.location.href = 'main.html'; // 출석 확인기 페이지로 이동
};
