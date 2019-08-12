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
            src="https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.15752-9/68444342_366120224306544_2925779258733232128_n.png?_nc_cat=110&_nc_oc=AQl6TtHu5pT35OHWaw2czeknQwiaaHZsb1ER30kTOIb-PZLMrhuPNv_RvCGiPW7PcYa_ajxrNs3ABb1HCFQ-sVSx&_nc_ht=scontent.fgdl5-2.fna&oh=79a06705711e7540a4525a547076e832&oe=5DD8B3AD"
            alt="Burguer Queen"
            data-action="https://github.com/cristalcabrera95/GDL002-burger-queen"
          />
          <img
            src="https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.15752-9/68410183_2091083660998205_7771786065626529792_n.png?_nc_cat=111&_nc_oc=AQmPd1JIBX7tBi7kgNlT0waLG5Vo9AEbqE41iRK_8yhtyXJra9y_UTv4QRmAtAFkSER7m8tqt3wut897Oa6VyUAL&_nc_ht=scontent.fgdl5-2.fna&oh=3180d4137a9af088999942b9cad428ca&oe=5DE767B8"
            alt="Data Lovers (Pokedex)"
            data-action="https://github.com/cristalcabrera95/GDL002-data-lovers"
          />
          <img
            src="https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.15752-9/68579909_645006319314663_6626797284011016192_n.png?_nc_cat=100&_nc_oc=AQlf1ENaN_SOj_tGJ-fG4NZED0zUU4Iby6iu7bL43vNcNwOqm_LdRyRLTxVYN37VfPXGxJ10i_O53Nr6o1y1uyOb&_nc_ht=scontent.fgdl5-2.fna&oh=13ba4d5660a1cd671f792cf0c5bef0fd&oe=5DD59CB4"
            alt="Videogame"
            data-action="https://github.com/cristalcabrera95/videogame"
          />
        </Coverflow>
      </StyleRoot>
    );
  }
}
