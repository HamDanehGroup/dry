import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

// GetStaticProps protection
type ProtectStaticRoute = (
  props: {
    context: GetStaticPropsContext;
  },
  callback?: GetStaticProps
) => ReturnType<GetStaticProps>;
export const protectStaticRoute: ProtectStaticRoute = async (
  props,
  callback
) => {
  // TODO: protection algorithm
  if (callback) {
    return await callback(props.context);
  } else {
    return {
      props: {},
    };
  }
};

// GetServerSideProps protection
type ProtectRoute = (
  props: {
    context: GetServerSidePropsContext;
  },
  callback?: GetServerSideProps
) => ReturnType<GetServerSideProps>;

export const protectRoute: ProtectRoute = async (props, callback) => {
  // TODO: protection algorithm
  if (callback) {
    return await callback(props.context);
  } else {
    return {
      props: {},
    };
  }
};
