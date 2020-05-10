import * as React from 'react';

const SvgFunnel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 642 854" {...props}>
    <g className="funnel__piece funnel__piece--capture">
      <mask
        id="funnel_svg__b"
        maskUnits="userSpaceOnUse"
        x={195}
        y={0}
        width={447}
        height={854}
      >
        <mask
          id="funnel_svg__a"
          maskUnits="userSpaceOnUse"
          x={195}
          y={0}
          width={447}
          height={854}
        >
          <path fill="#F2994A" d="M195.906 0h446v854h-446z" />
        </mask>
        <g mask="url(#funnel_svg__a)">
          <path
            d="M545.474 1190L192.632-1h705.684L545.474 1190z"
            fill="#F2994A"
          />
        </g>
      </mask>
      <g mask="url(#funnel_svg__b)">
        <path fill="#F2994A" d="M193.906 0h448v274h-448z" />
      </g>
    </g>
    <g className="funnel__piece funnel__piece--qualify">
      <mask
        id="funnel_svg__d"
        maskUnits="userSpaceOnUse"
        x={195}
        y={0}
        width={447}
        height={854}
      >
        <mask
          id="funnel_svg__c"
          maskUnits="userSpaceOnUse"
          x={195}
          y={0}
          width={447}
          height={854}
        >
          <path fill="#F2994A" d="M195.906 0h446v854h-446z" />
        </mask>
        <g mask="url(#funnel_svg__c)">
          <path
            d="M545.474 1190L192.632-1h705.684L545.474 1190z"
            fill="#F2994A"
          />
        </g>
      </mask>
      <g mask="url(#funnel_svg__d)" fill="#F2994A">
        <path fill="#F2994A" d="M193.906 292h448v274h-448z" />
      </g>
    </g>
    <g className="funnel__piece funnel__piece--solve">
      <mask
        id="funnel_svg__f"
        maskUnits="userSpaceOnUse"
        x={195}
        y={0}
        width={447}
        height={854}
        opacity={1}
      >
        <mask
          id="funnel_svg__e"
          maskUnits="userSpaceOnUse"
          x={195}
          y={0}
          width={447}
          height={854}
        >
          <path fill="#F2994A" d="M195.906 0h446v854h-446z" />
        </mask>
        <g mask="url(#funnel_svg__e)">
          <path
            d="M545.474 1190L192.632-1h705.684L545.474 1190z"
            fill="#F2994A"
          />
        </g>
      </mask>
      <g mask="url(#funnel_svg__f)">
        <path fill="#F2994A" d="M193.906 586h448v268h-448z" />
      </g>
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M272.906 78c-135.03 0-246.11 102.54-259.62 234h11.23C38.657 187.626 144.248 91 272.405 91c137.795 0 249.5 111.705 249.5 249.5v173.219c0 137.795-111.705 249.499-249.5 249.499-105.975 0-196.518-66.07-232.684-159.266l25.083-5.791-43.538-42.29L.674 612.967l27.4-6.326C64.913 706.106 160.63 777 272.907 777c144.146 0 261-116.854 261-261V339c0-144.146-116.854-261-261-261z"
      fill="#F2994A"
      opacity={0.5}
    />
  </svg>
);

export default SvgFunnel;
