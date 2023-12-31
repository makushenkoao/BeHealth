import { Box, Grid, Paper, Typography } from "@mui/material";
import { Share2 } from "lucide-react";

import avatar from "~/assets/images/doctor-avatar.png";
import Chips from "~/components/Header-card-doctor/Chips";
import { chipsMOCKdata, contactMOCKdata } from "./constant-header-doctor-card";
import { IContactPhoneWithIcon, TDoctor } from "~/common";
import ContactPhoneWithIcon from "~/components/atomic/Contact-phone-with-icon";
import { MapInfoDoctor } from "~/components/Map-info-doctor";

const HeaderCardDoctor = ({ doctor }: { doctor: TDoctor }) => {
  return (
    <Paper>
      <Box
        display="flex"
        gap="24px"
        p={4}
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box>
          <img //todo add photo with rest api
            src={avatar}
            //todo add description with rest api
            alt={"1"}
            width="296px"
            height="296px"
            style={{ borderRadius: "19px" }}
          />
        </Box>

        <Box flexDirection="column" display="flex" gap="24px" width="100%">
          <Box>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap="4px" flexDirection="column">
                <Typography variant="body2" component="p" color="#09A480">
                  Сімейний лікар
                </Typography>

                <Typography variant="h5" component="p">
                  Князєва Ольга Станіславівна
                </Typography>

                <Box>
                  <Typography variant="body2" component="span" color="#8E918F">
                    Стаж:
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    component="span"
                    color="#5C5F5D"
                    ml={0.5}
                  >
                    4 роки
                  </Typography>
                </Box>
              </Box>
              <Share2 color="#757875" />
            </Box>
          </Box>

          <Grid container display="flex" spacing={2}>
            {chipsMOCKdata.map((text: string) => {
              return (
                <Grid item key={`${text}-label`}>
                  <Chips text={text} />
                </Grid>
              );
            })}
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={6} md={12} width="100%">
              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                border=" 1px solid #E1E3E0"
                borderRadius="10px"
                padding="16px 24px"
              >
                <Box>
                  <Typography variant="caption" component="span">
                    ФОП Князєва О.С.
                  </Typography>

                  <Typography variant="caption" component="span" ml={1}>
                    Приватна клініка
                  </Typography>
                </Box>
                <MapInfoDoctor />
              </Box>
            </Grid>

            <Grid item lg={6} md={12} width="100%">
              <Box
                display="flex"
                flexDirection="column"
                gap="26px"
                border=" 1px solid #E1E3E0"
                borderRadius="10px"
                padding="16px 24px"
                sx={{
                  "@media (min-width: 1408px)": {
                    padding: "19.5px 24px",
                  },
                }}
              >
                <Typography variant="caption" component="p">
                  Контакти лікаря:
                </Typography>

                <Box display="flex" flexWrap="wrap" gap="16px">
                  {contactMOCKdata.map(
                    (item: IContactPhoneWithIcon, index: number) => {
                      return (
                        <ContactPhoneWithIcon
                          icon={item.icon}
                          phone={item.phone}
                          order={index}
                          key={index}
                        />
                      );
                    }
                  )}
                  <Typography
                    variant="caption"
                    component="p"
                    flex="1 1 150px"
                    order="4"
                    lineHeight="15px"
                  >
                    olgastan@onmedu.ua
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeaderCardDoctor;
