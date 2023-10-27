const SignInL = () => {
  return (
    <div className="relative bg-aliceblue-200 w-full h-[812px] overflow-hidden text-left text-sm text-gray-1000 font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[375px] h-[812px]" />
      <div className="absolute top-[268px] left-[32px] w-[311px] h-24">
        <div className="absolute top-[48px] left-[0px] w-[311px] h-12 overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-none rounded-b-3xl bg-primary-contrast" />
          <img
            className="absolute h-3/6 w-[7.72%] top-[25%] right-[3.86%] bottom-[25%] left-[88.42%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/view.svg"
          />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_139.5px)] leading-[24px] font-medium">
            ••••••••••••••••••
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[311px] h-12 overflow-hidden text-gray-900">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xl rounded-b-none bg-primary-contrast" />
          <div className="absolute h-[2.08%] w-[84.57%] top-[97.92%] right-[0%] bottom-[0%] left-[15.43%] bg-gray-700" />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_139.5px)] leading-[24px] font-medium">
            Email
          </div>
        </div>
      </div>
      <div className="absolute top-[204px] left-[32px] text-5xl tracking-[-1px] leading-[32px] uppercase font-extrabold font-druk-text-wide-trial">
        Sign in
      </div>
      <div className="absolute top-[676px] left-[32px] w-[311px] h-[104px] overflow-hidden text-center text-base text-primary-contrast">
        <div className="absolute h-[46.15%] w-full top-[53.85%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-[44.37%] top-[0%] right-[0%] bottom-[0%] left-[55.63%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xs [background:linear-gradient(135deg,_#00ffaa,_#4579f5_53.09%,_#9c42f5_99.98%)] shadow-[0px_0px_1px_rgba(69,_121,_245,_0.24),_0px_2px_4px_-1px_rgba(27,_10,_82,_0.12),_0px_16px_24px_rgba(69,_121,_245,_0.24),_0px_8px_8px_-4px_rgba(69,_121,_245,_0.12)]" />
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_28.5px)] leading-[28px] font-semibold">
              Sign in
            </div>
          </div>
          <div className="absolute h-full w-[36.01%] top-[0%] right-[63.99%] bottom-[0%] left-[0%] overflow-hidden text-left text-sm text-lightseagreen">
            <div className="absolute top-[calc(50%_-_0px)] left-[calc(50%_-_56px)] leading-[24px] font-semibold">
              Register now
            </div>
            <div className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_56px)] leading-[24px] font-medium text-gray-900">
              Not a member?
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_52px)] left-[calc(50%_-_81.5px)] text-sm leading-[24px] font-medium text-gray-900">
          Forgot your password?
        </div>
      </div>
    </div>
  );
};

export default SignInL;
