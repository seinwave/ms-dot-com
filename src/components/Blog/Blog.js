import React from "react";
import styled from "styled-components/macro";
import { COLORS, FONTSIZES, SPACING, WEIGHTS } from "../../constants";

function Blog() {
  return (
    <Wrapper>
      <BlogTitle>blolg</BlogTitle>
      <YearWrapper>
        <Year>2021</Year>
        <PostsContainer>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
        </PostsContainer>
      </YearWrapper>

      <YearWrapper>
        <Year>2020</Year>
        <PostsContainer>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
        </PostsContainer>
      </YearWrapper>
      <YearWrapper>
        <Year>2019</Year>
        <PostsContainer>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
          <IndividualPostWrapper>
            <PublishedDateWrapper>
              <PublishedDate>June 1</PublishedDate>
            </PublishedDateWrapper>
          </IndividualPostWrapper>
        </PostsContainer>
      </YearWrapper>
    </Wrapper>
  );
}

export default Blog;

const Wrapper = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogTitle = styled.header`
  font-size: ${FONTSIZES.pageHead};
`;

const YearWrapper = styled.section`
  position: relative;
  &:last-of-type {
    margin-bottom: 100vh;
  }
  padding: 8px 36px;
`;

const Year = styled.span`
  display: inline-block;
  position: sticky;
  top: 0;
  font-size: 24px;
  width: 100%;
  background-color: #fff;
  font-weight: 700;
`;

const PostsContainer = styled.div`
  margin-top: 24px;
`;

const IndividualPostWrapper = styled.div`
  margin: 16px 8px;
`;

const PublishedDateWrapper = styled.div`
  display: inline-block;
  text-align: left;
  border-right: solid 2px ${COLORS.gray[300]};
  height: 48px;
`;

const PublishedDate = styled.span`
  font-size: 16px;
  margin-right: 8px;
`;

//todo: summary wrapper, summary, read status, title
