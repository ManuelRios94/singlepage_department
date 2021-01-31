import {WeatherWidgetContainer} from "./style";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import {
    DEPARTMENT_LAT,
    DEPARTMENT_LONG,
    METRIC_CONFIG,
    LANG_ES_CONFIG,
    MONTE_HERMOSO_NAME,
    TEMPERATURE_LABEL,
    WIND_SPEED_LABEL
} from "../../../utils/const";

const WeatherWidget = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_WEATHER_API_KEY,
        lat: DEPARTMENT_LAT,
        lon: DEPARTMENT_LONG,
        lang: LANG_ES_CONFIG,
        unit: METRIC_CONFIG, // values are (metric, standard, imperial)
      });
    
    return (
        <WeatherWidgetContainer>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang={LANG_ES_CONFIG}
                locationLabel={MONTE_HERMOSO_NAME}
                unitsLabels={{ temperature: TEMPERATURE_LABEL, windSpeed: WIND_SPEED_LABEL}}
                showForecast
            />
        </WeatherWidgetContainer>
    );
  }
  
export default WeatherWidget;
  