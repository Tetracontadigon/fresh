/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NewPostForm from "./NewPostForm";
import { Flex } from "@aws-amplify/ui-react";
export default function EditPostForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EditPostForm")}
    >
      <NewPostForm
        display="flex"
        gap="16px"
        direction="column"
        width="640px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,20,44,1)"
        {...getOverrideProps(overrides, "NewPostForm")}
      ></NewPostForm>
    </Flex>
  );
}
