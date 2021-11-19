import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
  // make documentation the default page
  // https://docusaurus.io/docs/docusaurus-core/#redirect
  return <Redirect to="./docs/intro" />;
}
