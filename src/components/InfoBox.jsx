import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const InfoBox = ({ weatherInfo }) => {
  return (
    <div className="flex justify-center px-6 pb-4">
      <Card
        sx={{
          width: "100%",
          maxWidth: 390,
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "#ffffff",
        }}
        elevation={8}
      >
        {/* <CardMedia
          component="img"
          sx={{ height: 200, objectFit: "cover", display: "block" }}
          image="/weather-card.jpg"
          title="Cloudy sky"
        /> */}
        <CardContent
          className="flex flex-col gap-1 px-5 py-4 sm:gap-2 sm:px-6 sm:py-5"
          sx={{ color: "text.primary" }}
        >
          <div className="text-center">
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {weatherInfo.city}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", textTransform: "capitalize" }}
            >
              {weatherInfo.weather}
            </Typography>
          </div>
          <div className="text-center">
            <Typography
              variant="h3"
              component="p"
              sx={{ fontWeight: 700, lineHeight: 1, color: "#1677a8" }}
            >
              {weatherInfo.temp}°
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              Feels like {weatherInfo.feels_like}°
            </Typography>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-sky-50 px-3 py-2 text-center">
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                High
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {weatherInfo.temp_max}°
              </Typography>
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-center">
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Low
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {weatherInfo.temp_min}°
              </Typography>
            </div>
            <div className="rounded-xl bg-cyan-50 px-3 py-2 text-center">
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Humidity
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {weatherInfo.humidity}%
              </Typography>
            </div>
            <div className="rounded-xl bg-indigo-50 px-3 py-2 text-center">
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Pressure
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {weatherInfo.pressure}
              </Typography>
            </div>
          </div>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            Current conditions for {weatherInfo.city}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
