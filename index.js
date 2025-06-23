import { supabase } from './supabase.js'; // 상대경로로 import

window.login = async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert('로그인 실패: ' + error.message);
    return;
  }

  localStorage.setItem('accessToken', data.session.access_token);
  window.location.href = 'main.html';
};
