import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbsProps,
  Typography,
  useTheme,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

import { TRoute } from "~/common";
import { patientRoutes, doctorRoutes } from "~/routes";

const dotStyle = {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

function findRouteLabel(name: string, routes: TRoute[]): string {
  for (const route of routes) {
    if (route.path === name) return route.label;

    const label = route.children ? findRouteLabel(name, route.children) : "";

    if (label) return label;
  }
  return "";
}

export function BreadcrumbsUkr({ sx }: BreadcrumbsProps) {
  const { secondary60 } = useTheme().palette.custom;
  const location = useLocation();
  const pathNames = useMemo(
    () => location.pathname.split("/").filter((p) => p),
    [location]
  );
  const allRoutes = useMemo(() => [...patientRoutes, ...doctorRoutes], []);

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" color={secondary60} />}
      aria-label="Шлях"
      sx={sx}
    >
      <Typography
        variant="caption"
        component={Link}
        color="primary"
        to="/"
        sx={dotStyle}
      >
        Головна
      </Typography>

      {pathNames.map((name, index) => {
        const label = findRouteLabel(name, allRoutes);
        const isLast = index === pathNames.length - 1;
        const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
        return isLast ? (
          <Typography variant="caption" key={routeTo} color={secondary60}>
            {label || name}
          </Typography>
        ) : (
          <Typography
            variant="caption"
            component={Link}
            key={routeTo}
            color={secondary60}
            to={routeTo}
            sx={dotStyle}
          >
            {label || name}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}
