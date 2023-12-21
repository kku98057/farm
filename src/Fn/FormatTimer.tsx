export default function FormatTimer(currntTime: number) {
  const totalSeconds = Math.floor(currntTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // 분과 초를 두 자리 숫자로 포맷팅 (예: 05분 09초)
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
