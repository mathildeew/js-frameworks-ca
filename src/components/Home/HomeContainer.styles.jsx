import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const HomeContainer = styled.section`
  width: 100%;
  margin-bottom: 40px;

  .categories {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  .electronics {
    background-image: url("images/products/10-hairdryer.jpg");
  }

  .beauty {
    background-image: url("images/products/24-serum-vitamin-c.jpg");
  }

  .fashion {
    background-image: url("images/products/7-shoes-white.jpg");
  }

  .category {
    background-position: center;
    background-size: cover;
    width: 45%;
    height: 180px;
    margin: 5px 5px;
    position: relative;
    flex-grow: 1;
    box-sizing: border-box;
    justify-content: space-between;

    span {
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 600;
      background: var(--color-primary08);
      padding: 10px;
      border-radius: 6px;
      position: absolute;
      right: 5%;
      bottom: 5%;
    }
  }
`;
