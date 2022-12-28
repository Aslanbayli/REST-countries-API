import { useLocation, Link } from "react-router-dom";
import Layout from "./Layout";

export default function CountryPage() {
    const countryData = useLocation();
    const country = countryData.state;
    console.log(country);

    // Get the native language prop of country
    const nativeNameObject = country.name.nativeName
    const nativeLanguageObject = Object.keys(nativeNameObject)[0];
    const nativeLanguage = nativeNameObject[nativeLanguageObject].common;

    // Array for storing languages
    let languagesArray: string[] = [];
    // Get value of each child of Language object
    const getLangaugeObjectValues = (obj: any) => {
        for(let values in obj) {
            languagesArray.push(obj[values]);
        }   
    };
    // Call the function on the Languages object
    getLangaugeObjectValues(country.languages);
    // Convert the languages array to a comma separated string
    const languages = languagesArray.join(", ");

    // Array for storing currencies
    let currenciesArray: string[] = [];
    // Get value of each child of Currency object
    const getCurencyObjectValues = (obj: any) => {
        for(let values in obj) {
            currenciesArray.push(obj[values].name);
        }   
    };
    // Call the function on the Cuurencies object
    getCurencyObjectValues(country.currencies);
    // Convert the languages array to a comma separated string
    const currencies = currenciesArray.join(", ");

    
    // country.borders ? country.borders.map((border: string) => {
    //     <p>{border}</p> 
    // }) :
    // <div>None</div> 
    
  
    return (
        <Layout>
            <div>
                <Link to="/">Back</Link>
                <img src={country.flags.png} alt="flag" />
                <p>{country.name.common}</p>
                <div>
                    <p><span>Native Name: </span>{nativeLanguage}</p>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Sub Region: </span>{country.subregion}</p>
                    <p><span>Capital: </span>{country.capital}</p>
                    <p><span>Top Level Domain: </span>{country.tld}</p>
                    <p><span>Currencies: </span>{currencies}</p>
                    <p><span>Languages: </span>{languages}</p>
                </div>
                <div>
                    <p>Border Countries: </p>
                </div>
            </div>
        </Layout>
    );
}
