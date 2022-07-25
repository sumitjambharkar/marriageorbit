import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { green} from "@mui/material/colors";

const Topmatch = () => {

  const innerTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  const num = [
    {
      name: "Uma Gawasak",
      age: "26",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_20/582865/347004-em6IimbOUq.jpg",
    },
    {
      name: "Suman Kumari",
      age: "22",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_27/793782/504517-c8tQqSNBSD.jpg",
    },
    {
      name: "Anamika jainie",
      age: "22",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_29/840177/535881-3NmPSAGd1D.jpg",
    },
    {
      name: "Kritika Jaiswal",
      age: "25",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_27/785901/499193-mcHHqboANH.jpg",
    },
    {
      name: "Tamana Chawan",
      age: "24",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_27/809798/515703-uAISm6RVFT.jpg",
    },
    {
      name: "Ruchika Sharma",
      age: "24",
      live: "Mumbai",
      image:
        "https://dynamic.matrimonialsindia.com/photon/dir_25/736113/464270-oQteXcuxXJ.jpg",
    },
  ];
  return (
    <>
      <Header>
        <h1>Trushaddi.com</h1>
      </Header>
      <CreateSection>
        <Card className="container">
          <Form>
            <h1>Let's get started by connecting with few of your matches</h1>
          </Form>
          <Tamplte>
            {num.map((ele) => {
              return (
                <>
                  <GusetBox>
                    <img style={{ width: "120px" }} src={ele.image} alt="" />
                    <div style={{ padding: "8px" }}>
                      <p style={{ fontWeight: "bold" }}>{ele.name}</p>
                      <p>{ele.age} Yrs</p>
                      <p>{ele.live}</p>
                    </div>
                    <ThemeProvider theme={innerTheme}>
                      <Checkbox defaultChecked />
                    </ThemeProvider>
                  </GusetBox>
                </>
              );
            })}
          </Tamplte>
          <Button>
            <button>
              <Link to="/">Connect with match</Link>
            </button>
          </Button>
        </Card>
      </CreateSection>
      <SectionFooter>
        <Footer />
      </SectionFooter>
    </>
  );
};

export default Topmatch;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 12px;
  > h1 {
    font-family: romon;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const CreateSection = styled.div`
  background-color: rgb(235, 220, 220);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  @media (max-width: 500px) {
    background-color: white;
  }
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 24px;
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;
const Form = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 28px;
    font-weight: 400;
    text-align: center;
  }
`;
const Tamplte = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  > button {
    width: 210px;
    height: 40px;
    border: 1px solid #ffa500;
    background-color: #ffa500;
    border-radius: 24px;
    font-weight: 700;
    margin: 8px;
  }
  > button a {
    text-decoration: none;
    color: white;
  }
`;
const GusetBox = styled.div`
  display: flex;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SectionFooter = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
