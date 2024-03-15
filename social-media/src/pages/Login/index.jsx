import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex font-inter mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1024px] items-center justify-center my-auto p-[305px] md:px5 w-[58%]"
          style={{ backgroundImage: "url('images/img_left.png')" }}
        >
          <div className="flex flex-col items-center justify-start my-[130px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterBold30"
            >
              {" "}
              !HELLO
            </Text>
            <Text
              className="mt-3.5 text-sm text-white-A700"
              size="txtInterMedium14"
            >
              t have an account yer ?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[220px] mt-[30px] py-[22px] rounded-[29px] text-cente
r text-sm"
              onClick={() => navigate("/signup")}
              color="indigo_A200"
              variant="fill"
            >
              an account
            </Button>
          </div>
        </div>
        <div
          className="flex md:flex-col flex-row gap-2.5 items-center justify-between ml-[-45px] my-auto md:px-5 w-[46%]
z-[1]"
        >
          <div className="bg-white-A700_7e h-32 md:mt-0 my-[448px] rounded-sm w-[1%]"></div>
          <div className="bg-white-A700 flex flex-col justify-start p-[100px] md:px-10 sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
            <Img
              className="h-[41px] ml-9 md:ml-[0] w-[41px]"
              src="images/img_question.svg"
              alt="question"
            />
            <div
              className="flex flex-col gap-[18px] items-start justify-star
t md:ml-[0] ml-[37px] mt-[53px]"
            >
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                Welcome Back!{" "}
              </Text>
              <Text
                className="text-gray-500 text-sm"
                size="txtInterMedium14Gray500"
              >
                Sign in to continue{" "}
              </Text>
            </div>
            <div
              className="flex flex-col gap-[34px] items-center justify-start md:ml-[0] ml-[37px] mr-[53px] mt-[60px] pt-[3px
] w-4/5 md:w-full"
            >
              <div
                className="flex flex-col gap-3.5 items-start justify-start
w-full"
              >
                <Text
                  className="text-gray-900 text-xs tracking-[1.00px] uppercase
"
                  size="txtInterBold12"
                >
                  EMAIL
                </Text>
                <Input
                  name="email"
                  placeholder="anne.carry@mail.com"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="flex pb-3.5 pl-[15px] pt-[18px] w-full"
                  type="email"
                  suffix={
                    <Img
                      className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  }
                  shape="round"
                  color="gray_500_6c"
                  variant="outline"
                ></Input>
              </div>
              <div
                className="flex flex-col gap-3.5 items-start justify-start
w-full"
              >
                <Text
                  className="text-gray-900 text-xs tracking-[1.00px] uppercase
"
                  size="txtInterBold12"
                >
                  PASSWORD
                </Text>
                <Input
                  name="Group4523"
                  placeholder="Password@123"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="flex pb-3.5 pl-[15px] pt-[18px] w-full"
                  type="password"
                  suffix={
                    <Img
                      className="h-[18px] ml-[35px] mr-[15px] my-[15px]"
                      src="images/img_overflowmenu.svg"
                      alt="overflow_menu"
                    />
                  }
                  shape="round"
                  color="gray_500_6c"
                  variant="outline"
                ></Input>
              </div>
            </div>
            <Text
              className="common-pointer md:ml-[0] ml-[268px] mt-[25px] text-indigo-A200 text-sm"
              size="txtInterRegular14"
              onClick={() => navigate("/passwordrecovery")}
            >
              ?Forgot Password?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[350px] md:ml-[0] ml-[37px] mr-[53px] mt-[30px] py-[21px] rounded-[29px] text-center text-sm"
              onClick={() => navigate("/home1")}
              color="indigo_A200"
              variant="fill"
            >
              Login
            </Button>
            <div
              className="flex flex-col gap-[34px] justify-start mb-1 md:ml-[0] ml-[37px] mr-[53px] mt-[33px] w-4/5 md:w-full
"
            >
              <Text
                className="md:ml-[0] ml-[117px] text-gray-500 text-xs"
                size="txtInterRegular12"
              >
                Or connect with socials
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center
min-w-[350px] pr-[35px] py-[22px] rounded-[29px]"
                  leftIcon={
                    <Img
                      className="h-[18px] ml-[35px] mr-[3px] my-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  }
                  color="indigo_600"
                  variant="fill"
                >
                  <div className="font-bold sm:pr-5 text-left text-sm">
                    Connect with Facebook
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center
min-w-[350px] pr-[35px] py-[21px] rounded-[29px]"
                  leftIcon={
                    <Img
                      className="h-[18px] ml-[35px] mr-[5px] my-5"
                      src="images/img_icon_apple.svg"
                      alt="Icon/Apple"
                    />
                  }
                  color="gray_900"
                  variant="fill"
                >
                  <div className="font-bold sm:pr-5 text-left text-sm">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center
min-w-[350px] pr-[35px] py-[21px] rounded-[29px]"
                  leftIcon={
                    <Img
                      className="h-[18px] ml-[35px] mr-1 my-5"
                      src="images/img_google.svg"
                      alt="google"
                    />
                  }
                  color="gray_500_66"
                  variant="outline"
                >
                  <div className="font-bold sm:pr-5 text-left text-sm">
                    Connect with Google+
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
