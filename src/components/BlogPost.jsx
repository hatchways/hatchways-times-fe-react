import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Text from "./typography/Text";

const Flexbox = styled.div`
  display: flex;
  gap: 4px;
`;

const BlogWrapper = styled(Flexbox)`
  ${(props) => {
    const breakpoints = props.theme.getBreakpoints();

    return breakpoints({
      maxWidth: ["100%", 600],
      alignItems: ["flex-start", "center"],
      margin: "35px 0",
    });
  }}
`;

const BlogMetadata = styled(Flexbox)`
  padding-top: 8px;
`;

const BlogContent = styled.div`
  margin-right: 20px;
`;

const BlogAvatar = styled(Flexbox)`
  padding-bottom: 8px;
`;

const BlogAvatarImage = styled.img`
  width: 100px;
  height: 100px;
`;

function BlogPost({ author, title, excerpt, readingTimeMinutes }) {
  const theme = useTheme();

  return (
    <BlogWrapper>
      <BlogContent>
        <BlogAvatar>
          <BlogAvatarImage
            src={`https://joeschmoe.io/api/v1/${author}`}
            alt="Author"
            className="authorImage"
          />
          <Text variant="body">{author}</Text>
        </BlogAvatar>
        <Text
          variant="md"
          color={theme.colors.black}
          display="-webkit-box"
          WebkitLineClamp="4"
          WebkitBoxOrient="vertical"
          width="100%"
          overflow="hidden"
        >
          {title}
        </Text>
        <Text variant="body" color={theme.colors.lightGrey} lineHeight="20px">
          {excerpt}
        </Text>
        <BlogMetadata>
          <Text variant="body" color={theme.colors.lightGrey} fontSize="13px">
            &middot;
          </Text>
          <Text variant="body" color={theme.colors.lightGrey} fontSize="13px">
            {readingTimeMinutes} min read &middot;
          </Text>
        </BlogMetadata>
      </BlogContent>
    </BlogWrapper>
  );
}

BlogPost.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  readingTimeMinutes: PropTypes.number,
};

BlogPost.defaultProps = {
  author: "",
  title: "",
  excerpt: "",
  readingTimeMinutes: 0,
};

export default BlogPost;
