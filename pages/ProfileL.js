const ProfileL = () => {
  return (
    <div className="relative bg-aliceblue-200 w-full h-[812px] overflow-hidden text-left text-sm text-gray-900 font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[375px] h-[812px]" />
      <div className="absolute top-[416px] left-[32px] w-[311px] h-12 overflow-hidden text-orangered">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs bg-primary-contrast" />
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_107.5px)] leading-[24px] font-medium">
          Delete account
        </div>
        <img
          className="absolute h-3/6 w-[7.72%] top-[25%] right-[88.42%] bottom-[25%] left-[3.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/delete.svg"
        />
      </div>
      <div className="absolute top-[288px] left-[32px] w-[311px] h-24 text-right">
        <div className="absolute top-[48px] left-[0px] w-[311px] h-12 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-3xl bg-primary-contrast" />
          <div className="absolute h-3/6 w-[7.72%] top-[25%] right-[3.86%] bottom-[25%] left-[88.42%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            <img
              className="absolute h-[58.75%] w-[34.17%] top-[22.08%] right-[32.92%] bottom-[19.17%] left-[32.92%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/shape4.svg"
            />
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_27.5px)] leading-[24px] font-medium">
            ••••••••••••••••••
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_107.5px)] leading-[24px] font-medium text-gray-1000 text-left">
            Password
          </div>
          <img
            className="absolute h-3/6 w-[7.72%] top-[25%] right-[88.42%] bottom-[25%] left-[3.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/key.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[311px] h-12 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xl rounded-b-none bg-primary-contrast" />
          <div className="absolute h-[2.08%] w-[84.57%] top-[97.92%] right-[0%] bottom-[0%] left-[15.43%] bg-gray-700" />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_10.5px)] leading-[24px] font-medium">
            founder@nftyco.com
          </div>
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_107.5px)] leading-[24px] font-medium text-gray-1000 text-left">
            Email
          </div>
          <img
            className="absolute h-3/6 w-[7.72%] top-[25%] right-[88.42%] bottom-[25%] left-[3.86%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/mail.svg"
          />
        </div>
      </div>
      <div className="absolute top-[212px] left-[102px] w-[172px] h-[52px] overflow-hidden text-center">
        <div className="absolute top-[calc(50%_+_2px)] left-[calc(50%_-_44px)] leading-[24px] font-semibold">
          @askcasmir
        </div>
        <div className="absolute top-[calc(50%_-_26px)] left-[0px] text-xl tracking-[-0.4px] leading-[28px] font-semibold text-gray-1000">
          Casmir Patterson
        </div>
      </div>
      <img
        className="absolute top-[91px] left-[139px] w-[97px] h-[97px] object-cover"
        alt=""
        src="/item@2x.png"
      />
      <div className="absolute top-[44px] left-[0px] w-[375px] h-12">
        <div className="absolute top-[0px] left-[0px] w-[375px] h-12" />
        <div className="absolute top-[12px] left-[16px] w-6 h-6">
          <div className="absolute top-[0px] left-[0px] w-6 h-6" />
          <img
            className="absolute top-[6.2px] left-[4.5px] w-[15px] h-[12.3px]"
            alt=""
            src="/shape5.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[660px] left-[0px] w-[375px] h-[152px]"
        alt=""
        src="/tabs1.svg"
      />
    </div>
  );
};

export default ProfileL;
