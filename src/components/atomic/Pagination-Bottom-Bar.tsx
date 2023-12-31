import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { Pagination, useTheme } from "@mui/material";
import { useDeviceType } from "~/hooks";

type TProps = {
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const PaginationBottomBar = ({ count, setPage }: TProps) => {
  const { custom, primary } = useTheme().palette;
  const { isWidth600 } = useDeviceType();

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Pagination
      siblingCount={0}
      boundaryCount={isWidth600 ? 0 : 1}
      count={count || 1}
      variant="outlined"
      shape="rounded"
      color="primary"
      size="large"
      onChange={handleChangePage}
      sx={{
        "& .MuiPagination-ul": {
          gap: "16px",
        },
        "& .MuiButtonBase-root": {
          color: custom.secondary20,
          borderRadius: "6px",
          border: "1px solid #B2CCC0",
        },
        "& .MuiPaginationItem-previousNext": {
          color: primary.main,
          border: "none",
        },
        "& .MuiButtonBase-root.Mui-selected": {
          backgroundColor: primary.main,
          color: custom.primary100,
          "&:hover": {
            backgroundColor: primary.main,
          },
        },
      }}
    />
  );
};
