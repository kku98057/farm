export default function Loading({
  relative,
  bg,
}: {
  relative?: boolean;
  bg?: boolean;
}) {
  return (
    <div
      className="loading"
      style={{
        position: relative ? "relative" : "fixed",
        height: relative ? "100%" : "100vh",
        background: bg ? "#fff" : "",
      }}
    >
      <div className="loading_wrap">
        <img src="/slyricfarm/loading.gif" alt="로딩" />
      </div>
    </div>
  );
}
