/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function LNavBar(props) {
  const { overrides, ...rest } = props;
  const iconThreeZeroSevenZeroTwoSevenSevenFiveOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const vectorThreeOneFiveEightTwoEightFiveEightOnClick = useNavigateAction({
    type: "url",
    url: "/list",
  });
  const iconThreeOneFiveEightTwoEightFiveSevenOnClick = useNavigateAction({
    type: "url",
    url: "/form",
  });
  return (
    <View
      width="375px"
      height="49px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(4,20,44,1)"
      {...rest}
      {...getOverrideProps(overrides, "LNavBar")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(229,229,229,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="14px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Space App V1"
        {...getOverrideProps(overrides, "Space App V1")}
      ></Text>
      <View
        width="48px"
        height="48px"
        position="absolute"
        top="1px"
        left="276px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Outline/General/Home")}
      >
        <Icon
          width="33.40234375px"
          height="36.6845703125px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 33.40234375,
            height: 36.6845703125,
          }}
          paths={[
            {
              d: "M19.8169 4.25304C18.0758 2.58232 15.3268 2.58232 13.5856 4.25304L4.33277 13.1317C4.10607 13.3492 3.95357 13.6326 3.8969 13.9417C2.78864 19.9854 2.70683 26.1726 3.65492 32.2435L3.87996 33.6845L9.83287 33.6845L9.83287 21.2619C9.83287 20.4335 10.5044 19.7619 11.3329 19.7619L22.0697 19.7619C22.8981 19.7619 23.5697 20.4335 23.5697 21.2619L23.5697 33.6845L29.5226 33.6845L29.7477 32.2435C30.6958 26.1726 30.6139 19.9854 29.5057 13.9417C29.449 13.6326 29.2965 13.3492 29.0698 13.1317L19.8169 4.25304ZM11.5086 2.0884C14.4104 -0.696133 18.9921 -0.696133 21.894 2.0884L31.1469 10.9671C31.8281 11.6207 32.2862 12.472 32.4565 13.4006C33.6255 19.7758 33.7118 26.3025 32.7117 32.7064L32.3502 35.0214C32.2007 35.9787 31.3761 36.6845 30.4072 36.6845L22.0697 36.6845C21.2413 36.6845 20.5697 36.013 20.5697 35.1845L20.5697 22.7619L12.8329 22.7619L12.8329 35.1845C12.8329 36.013 12.1613 36.6845 11.3329 36.6845L2.99542 36.6845C2.02645 36.6845 1.20188 35.9787 1.05237 35.0214L0.690846 32.7064C-0.30925 26.3025 -0.222956 19.7758 0.946104 13.4006C1.11637 12.472 1.57454 11.6207 2.25568 10.9671L11.5086 2.0884Z",
              fill: "rgba(229,229,229,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="14.2%"
          bottom="9.38%"
          left="15.21%"
          right="15.21%"
          onClick={() => {
            iconThreeZeroSevenZeroTwoSevenSevenFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Icon30702775")}
        ></Icon>
      </View>
      <View
        width="48px"
        height="48px"
        position="absolute"
        top="1px"
        left="231px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Outline/Communication/User")}
      >
        <Icon
          width="31px"
          height="33.9580078125px"
          viewBox={{ minX: 0, minY: 0, width: 31, height: 33.9580078125 }}
          paths={[
            {
              d: "M7 8.5C7 3.80558 10.8056 0 15.5 0C20.1944 0 24 3.80558 24 8.5C24 13.1944 20.1944 17 15.5 17C10.8056 17 7 13.1944 7 8.5ZM15.5 3C12.4624 3 10 5.46243 10 8.5C10 11.5376 12.4624 14 15.5 14C18.5376 14 21 11.5376 21 8.5C21 5.46243 18.5376 3 15.5 3Z",
              fill: "rgba(229,229,229,1)",
              fillRule: "evenodd",
            },
            {
              d: "M7.5 23C5.01472 23 3 25.0147 3 27.5L3 29.8766C3 29.9128 3.02623 29.9436 3.06194 29.9494C11.2994 31.2943 19.7006 31.2943 27.9381 29.9494C27.9738 29.9436 28 29.9128 28 29.8766L28 27.5C28 25.0147 25.9853 23 23.5 23L22.8183 23C22.7656 23 22.7132 23.0083 22.6631 23.0247L20.932 23.5899C17.4024 24.7425 13.5976 24.7425 10.068 23.5899L8.33694 23.0247C8.28683 23.0083 8.23445 23 8.18174 23L7.5 23ZM0 27.5C0 23.3579 3.35786 20 7.5 20L8.18174 20C8.55072 20 8.91739 20.0583 9.26814 20.1729L10.9992 20.7381C13.9237 21.6931 17.0763 21.6931 20.0008 20.7381L21.7319 20.1729C22.0826 20.0583 22.4493 20 22.8183 20L23.5 20C27.6421 20 31 23.3579 31 27.5L31 29.8766C31 31.383 29.9082 32.6675 28.4215 32.9102C19.8638 34.3074 11.1362 34.3074 2.57854 32.9102C1.09177 32.6675 0 31.383 0 29.8766L0 27.5Z",
              fill: "rgba(229,229,229,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="13.54%"
          bottom="15.71%"
          left="17.71%"
          right="17.71%"
          {...getOverrideProps(overrides, "Icon30702773")}
        ></Icon>
      </View>
      <Icon
        width="40px"
        height="40px"
        viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
        paths={[
          {
            d: "M4 4L36 4L36 28L6.34 28L4 30.34L4 4ZM4 0C1.8 0 0.02 1.8 0.02 4L0 40L8 32L36 32C38.2 32 40 30.2 40 28L40 4C40 1.8 38.2 0 36 0L4 0ZM8 20L24 20L24 24L8 24L8 20ZM8 14L32 14L32 18L8 18L8 14ZM8 8L32 8L32 12L8 12L8 8Z",
            fill: "rgba(229,229,229,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="12.24%"
        bottom="6.12%"
        left="36.8%"
        right="52.53%"
        onClick={() => {
          vectorThreeOneFiveEightTwoEightFiveEightOnClick();
        }}
        {...getOverrideProps(overrides, "Vector31582858")}
      ></Icon>
      <View
        width="48px"
        height="48px"
        position="absolute"
        top="0px"
        left="324px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon")}
      >
        <Icon
          width="32px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 32, height: 8 }}
          paths={[
            {
              d: "M4 0C1.8 0 0 1.8 0 4C0 6.2 1.8 8 4 8C6.2 8 8 6.2 8 4C8 1.8 6.2 0 4 0ZM28 0C25.8 0 24 1.8 24 4C24 6.2 25.8 8 28 8C30.2 8 32 6.2 32 4C32 1.8 30.2 0 28 0ZM16 0C13.8 0 12 1.8 12 4C12 6.2 13.8 8 16 8C18.2 8 20 6.2 20 4C20 1.8 18.2 0 16 0Z",
              fill: "rgba(229,229,229,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="41.67%"
          bottom="41.67%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector31582851")}
        ></Icon>
      </View>
      <Icon
        width="37px"
        height="36px"
        viewBox={{ minX: 0, minY: 0, width: 37, height: 36 }}
        paths={[
          {
            d: "M19.2934 10.4516C20.1665 10.4516 20.8743 11.1606 20.8743 12.0352L20.8743 16.2581L25.0902 16.2581C25.9633 16.2581 26.6711 16.9671 26.6711 17.8417C26.6711 18.7163 25.9633 19.4253 25.0902 19.4253L20.8743 19.4253L20.8743 23.6481C20.8743 24.5227 20.1665 25.2317 19.2934 25.2317C18.4202 25.2317 17.7124 24.5227 17.7124 23.6481L17.7124 19.4253L13.4965 19.4253C12.6233 19.4253 11.9155 18.7163 11.9155 17.8417C11.9155 16.9671 12.6233 16.2581 13.4965 16.2581L17.7124 16.2581L17.7124 12.0352C17.7124 11.1606 18.4202 10.4516 19.2934 10.4516Z",
            fill: "rgba(229,229,229,1)",
            fillRule: "nonzero",
          },
          {
            d: "M2.93964 24.396C-1.79873 12.7462 6.75763 0 19.3163 0L19.9939 0C29.3861 0 37 7.62653 37 17.0343C37 27.5088 28.5228 36 18.0657 36L1.58104 36C0.910177 36 0.312359 35.5759 0.0897021 34.942C-0.132954 34.3081 0.0680382 33.6025 0.591109 33.1817L4.7469 29.8387C4.92861 29.6925 4.99288 29.4442 4.90495 29.228L2.93964 24.396ZM19.3163 3.16716C9.00318 3.16716 1.97674 13.6343 5.86786 23.2011L7.83318 28.033C8.44869 29.5463 7.99874 31.2849 6.72677 32.3081L6.07447 32.8328L18.0657 32.8328C26.7766 32.8328 33.8381 25.7596 33.8381 17.0343C33.8381 9.3757 27.6398 3.16716 19.9939 3.16716L19.3163 3.16716Z",
            fill: "rgba(229,229,229,1)",
            fillRule: "evenodd",
          },
        ]}
        position="absolute"
        top="14.29%"
        bottom="12.24%"
        left="50.93%"
        right="39.2%"
        onClick={() => {
          iconThreeOneFiveEightTwoEightFiveSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Icon31582857")}
      ></Icon>
    </View>
  );
}
