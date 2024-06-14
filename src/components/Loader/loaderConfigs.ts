type SingleConfig = {
  id: string;
  style: React.CSSProperties;
};

type LoaderConfig = {
  TEXT: SingleConfig;
  TEXT_SMALL: SingleConfig;
  IMAGE: SingleConfig;
};

export const loaderConfig: LoaderConfig = {
  TEXT: {
    id: "text",
    style: {
      width: "100%",
      height: 24,
      marginTop: 10,
    },
  },
  TEXT_SMALL: {
    id: "text_small",
    style: {
      width: "50%",
      height: 24,
      marginTop: 10,
    },
  },
  IMAGE: {
    id: "image",
    style: {
      width: 100,
      height: 100,
    },
  },
};

export const getCustomisedConfig = (
  config: SingleConfig,
  style: React.CSSProperties
) => {
  return {
    ...config,
    style: {
      ...config.style,
      ...style,
    },
  };
};
