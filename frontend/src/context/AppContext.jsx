import { createContext} from "react";
import { topClubsData,topLeaguesData,topSponsorData,topTeamsData, allTeamsData ,matches} from "../assets/assets";




export const AppContext = createContext()




const AppContextProvider = (props) =>{


    const value = {
       topClubsData,
       topLeaguesData,
       topSponsorData,
       topTeamsData,
       allTeamsData,
       matches,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;