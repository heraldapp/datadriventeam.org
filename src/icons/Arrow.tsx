import * as React from 'react';

const SvgCustomArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 26 12" {...props}>
    <path d="M23.091 5.5l-6.336-3.564-.436-.245.49-.872.436.245 8 4.5.775.436-.775.436-8 4.5-.436.245-.49-.872.436-.245L23.09 6.5H0v-1h23.091z" />
  </svg>
);

export default SvgCustomArrow;
