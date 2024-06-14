type LoaderConfig = {
  TEXT: React.CSSProperties;
  TEXT_SMALL: React.CSSProperties;
  IMAGE: React.CSSProperties;
};

export const loaderConfig: LoaderConfig = {
  TEXT: {
    width: "100%",
    height: 24,
    marginTop: 10,
    borderRadius: 10,
  },
  TEXT_SMALL: {
    width: "50%",
    height: 24,
    marginTop: 10,
    borderRadius: 10,
  },
  IMAGE: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
};
