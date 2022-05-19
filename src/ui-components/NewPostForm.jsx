/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NewPostForm(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeZeroEightTwoTwoEightSixOneValue,
    setTextFieldThreeZeroEightTwoTwoEightSixOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightTwoTwoEightSixThreeValue,
    setTextFieldThreeZeroEightTwoTwoEightSixThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeZeroEightTwoTwoEightSixTwoValue,
    setTextFieldThreeZeroEightTwoTwoEightSixTwoValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldThreeZeroEightTwoTwoEightSixOneValue,
      text: textFieldThreeZeroEightTwoTwoEightSixThreeValue,
      image:
        "https://www.ondemandcmo.com/wp-content/uploads/2016/03/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg",
      groundCoords: "0N 0W",
      skyCoords: textFieldThreeZeroEightTwoTwoEightSixTwoValue,
      likes: "0",
    },
    model: Post,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(4,20,44,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewPostForm")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(229,229,229,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(229,229,229,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Post"
            {...getOverrideProps(overrides, "New Post")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30822856")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(229,229,229,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Title"
            placeholder="Rocket"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightTwoTwoEightSixOneValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightTwoTwoEightSixOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30822861")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Celestial Coordinates"
            placeholder="2237+0305"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightTwoTwoEightSixTwoValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightTwoTwoEightSixTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30822862")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Description"
            placeholder="A cool rocket launch I saw yesterday."
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeZeroEightTwoTwoEightSixThreeValue}
            onChange={(event) => {
              setTextFieldThreeZeroEightTwoTwoEightSixThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField30822863")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider30822864")}
        ></Divider>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          backgroundColor="rgba(196,68,68,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Post"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
