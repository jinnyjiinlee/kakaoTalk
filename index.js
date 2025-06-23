import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  'https://lcymnrtijbpuymftcwaz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeW1ucnRpamJwdXltZnRjd2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MDAxNzQsImV4cCI6MjA2NjI3NjE3NH0.x2A5U5NuA4JXLGE4TjETC6VVh7xSDrxO6UWcoPk8_ms'
);

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
