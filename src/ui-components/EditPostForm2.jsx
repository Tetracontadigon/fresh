/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useDataStoreUpdateAction,
  useNavigateAction,
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
export default function EditPostForm2(props) {
  const { post, overrides, ...rest } = props;
  const [
    textFieldThreeOneSixFiveTwoNineTwoSevenValue,
    setTextFieldThreeOneSixFiveTwoNineTwoSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveTwoNineTwoNineValue,
    setTextFieldThreeOneSixFiveTwoNineTwoNineValue,
  ] = useStateMutationAction("");
  const iconThreeOneFiveFiveTwoEightFourEightOnClick = useDataStoreDeleteAction(
    { id: post?.id, model: Post, schema: schema }
  );
  const buttonOnClick = useDataStoreUpdateAction({
    fields: {
      title: textFieldThreeOneSixFiveTwoNineTwoSevenValue,
      text: textFieldThreeOneSixFiveTwoNineTwoNineValue,
      image:
        "data:image/png;base64,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",
      groundCoords: "90N 90W",
      skyCoords: "0, 0",
      likes: "0",
    },
    id: post?.id,
    model: Post,
    schema: schema,
  });
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/list" });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EditPostForm2")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="640px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,20,44,1)"
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
              {...getOverrideProps(overrides, "Icon31652919")}
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
              children="Edit Post"
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
            {...getOverrideProps(overrides, "Divider31652922")}
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
              label=""
              placeholder="Rocket"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeOneSixFiveTwoNineTwoSevenValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveTwoNineTwoSevenValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31652927")}
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
              {...getOverrideProps(overrides, "TextField31652928")}
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
              value={textFieldThreeOneSixFiveTwoNineTwoNineValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveTwoNineTwoNineValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31652929")}
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
            {...getOverrideProps(overrides, "Divider31652930")}
          ></Divider>
          <Icon
            width="35.52px"
            height="46.39px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 35.5205078125,
              height: 46.3916015625,
            }}
            paths={[
              {
                d: "M13.1771 0C12.2278 0 11.4583 0.769511 11.4583 1.71875L11.4583 3.4375L1.71875 3.4375C0.769511 3.4375 0 4.20701 0 5.15625C0 6.10549 0.769511 6.875 1.71875 6.875L33.8021 6.875C34.7513 6.875 35.5208 6.10549 35.5208 5.15625C35.5208 4.20701 34.7513 3.4375 33.8021 3.4375L24.0625 3.4375L24.0625 1.71875C24.0625 0.769511 23.293 0 22.3438 0L13.1771 0Z",
                fill: "rgba(229,229,229,1)",
                fillRule: "nonzero",
              },
              {
                d: "M13.1771 19.25C14.1263 19.25 14.8958 20.0195 14.8958 20.9687L14.8958 37.0104C14.8958 37.9596 14.1263 38.7292 13.1771 38.7292C12.2278 38.7292 11.4583 37.9596 11.4583 37.0104L11.4583 20.9687C11.4583 20.0195 12.2278 19.25 13.1771 19.25Z",
                fill: "rgba(229,229,229,1)",
                fillRule: "nonzero",
              },
              {
                d: "M24.0625 20.9687C24.0625 20.0195 23.293 19.25 22.3438 19.25C21.3945 19.25 20.625 20.0195 20.625 20.9687L20.625 37.0104C20.625 37.9596 21.3945 38.7292 22.3438 38.7292C23.293 38.7292 24.0625 37.9596 24.0625 37.0104L24.0625 20.9687Z",
                fill: "rgba(229,229,229,1)",
                fillRule: "nonzero",
              },
              {
                d: "M3.99077 12.9873C4.08748 12.1168 4.82322 11.4583 5.699 11.4583L29.8218 11.4583C30.6976 11.4583 31.4333 12.1168 31.5301 12.9873L31.9887 17.1154C32.8202 24.5984 32.8202 32.1505 31.9887 39.6335L31.9436 40.0399C31.6135 43.0103 29.3114 45.3788 26.3517 45.7932C20.652 46.5911 14.8689 46.5911 9.16914 45.7932C6.20937 45.3788 3.90728 43.0103 3.57724 40.0399L3.53209 39.6335C2.70064 32.1505 2.70064 24.5984 3.53209 17.1154L3.99077 12.9873ZM7.23736 14.8958L6.94857 17.495C6.14515 24.7257 6.14515 32.0232 6.94857 39.2539L6.99372 39.6603C7.15024 41.069 8.24203 42.1923 9.64574 42.3889C15.0293 43.1425 20.4915 43.1425 25.8751 42.3889C27.2788 42.1923 28.3706 41.069 28.5271 39.6603L28.5723 39.2539C29.3757 32.0232 29.3757 24.7257 28.5723 17.495L28.2835 14.8958L7.23736 14.8958Z",
                fill: "rgba(229,229,229,1)",
                fillRule: "evenodd",
              },
            ]}
            shrink="0"
            position="relative"
            onClick={() => {
              iconThreeOneFiveFiveTwoEightFourEightOnClick();
            }}
            {...getOverrideProps(overrides, "Icon31552848")}
          ></Icon>
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
            children="Edit"
            onClick={() => {
              buttonOnClick();
            }}
            onMouseUp={() => {
              buttonOnMouseUp();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
