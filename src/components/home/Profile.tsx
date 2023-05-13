import { ThreeAnimation } from '../../libs/index';

export const Profile = () => {
  return (
    <div class="profile flex flex-column justify-center items-start pr-20">
      <h1 class="text-2xl font-semibold pb-3">Creating Desital Product.</h1>
      <p class="text-xs font-base">
        {/* This is the portfolio site of Yudai Yamamoto, software engineer. I mainly plan and develop digital products. */}
        ソフトウェアエンジニア、山本雄大のポートフォリオサイトです。
        デジタルプロダクトの企画、開発を行っています。
      </p>
      <div class="flex justify-start h-20">
        <ThreeAnimation />
      </div>
    </div>
  );
};