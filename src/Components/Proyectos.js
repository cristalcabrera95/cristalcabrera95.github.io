import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

export default class Proyectos extends Component {
  render() {
    return (
      <StyleRoot id='proyectos'>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading
          media={{
            "@media (max-width: 600px)": {
              width: "70%",
              height: "300px"
            },
            "@media (min-width: 600px)": {
              width: "90%",
              height: "400px"
            }
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/cV6jB4iXDFWtP4_xLjVWKPqltoqX70wvrzPxD78izj3K9nmWKSjxGVT0Vyv6EDcjHr7itUXRJJ-ftmgLr4UcfwrUVy_gIHwnZAhwkgCdvmcZXKpYdqNReRTcFJFm6sNAp-oaHNsP1kPWZIovhxXEZjTqo4mnqj5rXzAH798YIaZt_gmZbjVfe0bBFJ0CyJjs7vSL_5ulofnLsStzi3rYsdIDKt8ZFSgG6ZE7dUyWPeTd4nbathD96s6RgR9d18bFe5GHNDcy9DirD3s0s7El3leXbCOxM0ozud3j91O1X1CmEm5PLDqc8Inh-cGSB2Q0nQXJgLgQkJDkRj-J372qMnYg-_qXtrRREAoAFnlYQMjqQok2W3vQYjsctd05FfPIrXffh2rgNrUDUIYJkFoA_MnJOrIdyYFatmPFuH2dPoY2BcB70kDaIIPgGwLv8hOjN3SgyXxpXl-8tEbVw46pLL9WimVGI8wMiwpHAfIdh9lh0rH2tSXQyeaMHVhuNGA074s-9x-CTwZKL5SSZDLMApiIDxZ764JFhPm_BZIs8ox5nMU2nTaCLF_yeZ3r17uku79sjjuZ0koHXvLBrRVOnEmns3uFUlDhwTyXEz1_Iiov_PAtFEpB736TOD9RVcgHuvGrDfJCUC4gexRdcyH0xSqJ5z6RWBNLbEP-H4Iveh80O4rqSomWc8Z-HVzzKTH8CoGUyoo4y9ZKhVg24A=w1246-h697-no"
            alt="Cipher"
            data-action="https://github.com/cristalcabrera95/gdl-2019-01-bc-core-cipher"
          />
          <img
            src="images/album-2.png"
            alt="Album two"
            data-action="http://passer.cc"
          />
          <img
            src="images/album-3.png"
            alt="Album three"
            data-action="https://doce.cc/"
          />
          <img
            src="images/album-4.png"
            alt="Album four"
            data-action="http://tw.yahoo.com"
          />
        </Coverflow>
      </StyleRoot>
    );
  }
}
