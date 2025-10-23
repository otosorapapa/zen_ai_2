import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-24 text-center text-slate-900">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">404</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">ページが見つかりません</h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        指定されたURLのページは削除されたか、移動した可能性があります。ホームに戻って最新の情報をご確認ください。
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
      >
        トップに戻る
      </Link>
    </main>
  );
};

export default NotFound;
