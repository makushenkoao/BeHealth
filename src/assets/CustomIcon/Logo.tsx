import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconsProps } from "../../common/types_and_interfaces";

const Logo = (props: SvgIconsProps) => {
  return (
    // <SvgIcon
    //     {...props}
    // >
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M8.60483 20.0735C7.90154 20.0735 7.25751 19.9592 6.67292 19.7309C6.08825 19.5026 5.57677 19.1828 5.13831 18.7718C4.69985 18.3515 4.34815 17.8492 4.08323 17.2646H4.00098V19.772H0V0H4.00098V7.632H4.08323C4.3572 7.03828 4.71351 6.53132 5.15197 6.11105C5.59043 5.68182 6.102 5.35292 6.68659 5.12455C7.28031 4.89618 7.92434 4.782 8.61858 4.782C9.85172 4.782 10.9114 5.088 11.7974 5.7C12.6926 6.30295 13.3823 7.17526 13.8665 8.31711C14.3506 9.44982 14.5926 10.8155 14.5926 12.414V12.4278C14.5926 14.0172 14.3506 15.3828 13.8665 16.5246C13.3823 17.6665 12.6926 18.5434 11.7974 19.1554C10.9023 19.7674 9.83806 20.0735 8.60483 20.0735ZM7.27578 16.7575C7.94262 16.7575 8.51806 16.584 9.00222 16.2369C9.48637 15.8806 9.86086 15.3782 10.1258 14.7296C10.3907 14.0811 10.5232 13.3137 10.5232 12.4278V12.414C10.5232 11.5188 10.3907 10.7515 10.1258 10.112C9.86086 9.46357 9.48185 8.96566 8.98846 8.61858C8.5044 8.27151 7.93348 8.09788 7.27578 8.09788C6.62723 8.09788 6.05631 8.27603 5.56302 8.63225C5.07886 8.97942 4.69523 9.47723 4.41203 10.1258C4.13797 10.7652 4.00098 11.5279 4.00098 12.414V12.4278C4.00098 13.3138 4.13797 14.0811 4.41203 14.7296C4.68609 15.3782 5.06972 15.8806 5.56302 16.2369C6.05631 16.584 6.62723 16.7575 7.27578 16.7575ZM20.0612 13.3732C20.0767 14.1216 20.2087 14.7655 20.4571 15.3052C20.7312 15.8806 21.1194 16.3237 21.6218 16.6342C22.1242 16.9357 22.7225 17.0864 23.4167 17.0864C23.9648 17.0864 24.4398 16.9996 24.8418 16.826C25.2437 16.6525 25.5725 16.4333 25.8282 16.1683C26.0841 15.9034 26.2577 15.634 26.349 15.36L26.3764 15.2778H30.0485L30.0074 15.4285C29.8977 15.9674 29.6831 16.5109 29.3634 17.059C29.0437 17.607 28.6098 18.1095 28.0617 18.5662C27.5227 19.023 26.8605 19.3883 26.0749 19.6624C25.2985 19.9364 24.385 20.0734 23.3346 20.0734C21.8364 20.0734 20.5484 19.7674 19.4706 19.1554C18.3927 18.5343 17.5614 17.6527 16.9768 16.5109C16.4013 15.369 16.1136 14.0171 16.1136 12.4551V12.4414C16.1136 10.8794 16.4013 9.52745 16.9768 8.3856C17.5614 7.23462 18.3789 6.34865 19.4295 5.72742C20.4891 5.09714 21.736 4.782 23.1702 4.782C24.6042 4.782 25.842 5.088 26.8833 5.7C27.9339 6.30295 28.7423 7.15699 29.3086 8.26228C29.8841 9.36757 30.1718 10.6602 30.1718 12.1399V13.3732H20.0612ZM20.107 10.852H26.331C26.2717 10.347 26.1544 9.90388 25.979 9.52292C25.7142 8.93825 25.3442 8.49978 24.8692 8.20754C24.4033 7.9152 23.8598 7.76908 23.2386 7.76908C22.6174 7.76908 22.0648 7.91972 21.5806 8.2212C21.1057 8.52268 20.7311 8.96566 20.4571 9.55034C20.2835 9.92732 20.1668 10.3613 20.107 10.852ZM33.6796 19.772V0H37.8175V8.02938H46.7238V0H50.8619V19.772H46.7238V11.4412H37.8175V19.772H33.6796ZM57.2212 13.3732C57.2367 14.1216 57.3685 14.7655 57.6169 15.3052C57.8911 15.8806 58.2792 16.3237 58.7815 16.6342C59.2839 16.9357 59.8823 17.0864 60.5766 17.0864C61.1246 17.0864 61.5996 16.9996 62.0015 16.826C62.4035 16.6525 62.7323 16.4333 62.9881 16.1683C63.2439 15.9034 63.4173 15.634 63.5089 15.36L63.5361 15.2778H67.2085L67.1673 15.4285C67.0577 15.9674 66.843 16.5109 66.5231 17.059C66.2034 17.607 65.7696 18.1095 65.2216 18.5662C64.6827 19.023 64.0204 19.3883 63.2346 19.6624C62.4584 19.9364 61.545 20.0734 60.4942 20.0734C58.9962 20.0734 57.7085 19.7674 56.6304 19.1554C55.5527 18.5343 54.7212 17.6527 54.1365 16.5109C53.5612 15.369 53.2734 14.0171 53.2734 12.4551V12.4414C53.2734 10.8794 53.5612 9.52745 54.1365 8.3856C54.7212 7.23462 55.5389 6.34865 56.5892 5.72742C57.6488 5.09714 58.8958 4.782 60.33 4.782C61.7643 4.782 63.0019 5.088 64.0431 5.7C65.0938 6.30295 65.902 7.15699 66.4685 8.26228C67.0438 9.36757 67.3315 10.6602 67.3315 12.1399V13.3732H57.2212ZM57.2669 10.852H63.4908C63.4315 10.347 63.3143 9.90388 63.1388 9.52292C62.8738 8.93825 62.5038 8.49978 62.0288 8.20754C61.563 7.9152 61.0196 7.76908 60.3985 7.76908C59.7774 7.76908 59.2246 7.91972 58.7404 8.2212C58.2654 8.52268 57.8911 8.96566 57.6169 9.55034C57.4433 9.92732 57.3267 10.3613 57.2669 10.852ZM78.1835 10.8454V9.94763C78.1835 9.29908 77.9781 8.78751 77.5669 8.41302C77.1561 8.02938 76.5577 7.83757 75.772 7.83757C75.0231 7.83757 74.4293 7.99283 73.9908 8.30345C73.5523 8.61397 73.2831 9.00674 73.1823 9.48185L73.155 9.60508H69.4965L69.5104 9.44068C69.5835 8.53634 69.8804 7.73252 70.4008 7.02914C70.9308 6.32575 71.6615 5.77772 72.5931 5.38486C73.5342 4.98295 74.6485 4.782 75.9366 4.782C77.2062 4.782 78.3069 4.98757 79.2389 5.39862C80.1704 5.80052 80.8919 6.37145 81.4035 7.11138C81.9243 7.85123 82.1846 8.71449 82.1846 9.70108V19.772H78.1835V17.5797H78.1015C77.8273 18.0821 77.4712 18.516 77.0327 18.8814C76.6035 19.2376 76.1146 19.5162 75.5666 19.7172C75.0185 19.909 74.42 20.0049 73.7716 20.0049C72.7942 20.0049 71.9354 19.8176 71.1958 19.4431C70.4558 19.0595 69.8758 18.5343 69.4554 17.8674C69.0442 17.1915 68.8388 16.4241 68.8388 15.5655V15.5381C68.8388 14.6429 69.0627 13.8801 69.5104 13.2498C69.9577 12.6104 70.6065 12.108 71.4561 11.7426C72.3054 11.3772 73.3377 11.1534 74.5527 11.0712L78.1835 10.8454ZM78.1835 13.3433L75.1554 13.5376C74.3881 13.5833 73.8035 13.7659 73.4015 14.0857C72.9996 14.3962 72.7988 14.8119 72.7988 15.3325V15.36C72.7988 15.8989 73.0042 16.3237 73.4154 16.6342C73.8266 16.9357 74.3792 17.0864 75.0735 17.0864C75.6669 17.0864 76.197 16.9722 76.6627 16.7439C77.1377 16.5064 77.5077 16.1866 77.7727 15.7847C78.0465 15.3737 78.1835 14.9123 78.1835 14.4008V13.3433ZM84.8704 19.772V0H88.8712V19.772H84.8704ZM97.4077 20.0734C95.7815 20.0734 94.5758 19.7309 93.7904 19.0458C93.0046 18.3606 92.6119 17.2326 92.6119 15.6614V8.09788H90.5704V5.08348H92.6119V1.49354H96.6538V5.08348H99.3396V8.09788H96.6538V15.2229C96.6538 15.908 96.8047 16.3876 97.1061 16.6616C97.4166 16.9266 97.8735 17.059 98.4762 17.059C98.6588 17.059 98.8189 17.0544 98.9558 17.0453C99.093 17.0271 99.2208 17.0088 99.3396 16.9905V19.9228C99.1204 19.9592 98.8461 19.9913 98.5173 20.0187C98.1977 20.0552 97.8277 20.0734 97.4077 20.0734ZM101.642 19.772V0H105.642V7.61834H105.725C106.108 6.70486 106.679 6.006 107.437 5.52194C108.205 5.02865 109.137 4.782 110.233 4.782C111.302 4.782 112.22 5.01951 112.987 5.49452C113.754 5.9604 114.343 6.62262 114.754 7.48126C115.175 8.34 115.385 9.36305 115.385 10.5505V19.772H111.383V11.3727C111.383 10.3495 111.137 9.55034 110.644 8.9748C110.16 8.39022 109.461 8.09788 108.547 8.09788C107.963 8.09788 107.451 8.23948 107.013 8.52268C106.583 8.79665 106.245 9.18037 105.999 9.67357C105.761 10.1577 105.642 10.7195 105.642 11.3589V19.772H101.642Z"
    //     fill="url(#paint0_linear_842_560)"
    //   />
    //   <defs>
    //     <linearGradient
    //       id="paint0_linear_842_560"
    //       x1="31.283"
    //       y1="11.3575"
    //       x2="32.4943"
    //       y2="11.4126"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#002117" />
    //       <stop offset="1" stopColor="#19AD88" />
    //     </linearGradient>
    //   </defs>
    // </SvgIcon>
      <svg {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4235 32.2146C12.3264 32.2146 11.3217 32.0363 10.4098 31.68C9.49766 31.3239 8.69976 30.8251 8.01576 30.1839C7.33176 29.5283 6.78312 28.7446 6.36984 27.8327H6.24154V31.7443H0V0.899902H6.24154V12.8058H6.36984C6.79723 11.8796 7.35307 11.0888 8.03707 10.4331C8.72107 9.76354 9.51912 9.25046 10.4311 8.89421C11.3573 8.53795 12.362 8.35982 13.445 8.35982C15.3687 8.35982 17.0218 8.83718 18.4039 9.7919C19.8004 10.7325 20.8764 12.0933 21.6317 13.8746C22.387 15.6416 22.7645 17.7721 22.7645 20.2657V20.2872C22.7645 22.7667 22.387 24.8971 21.6317 26.6784C20.8764 28.4596 19.8004 29.8276 18.4039 30.7824C17.0076 31.7371 15.3474 32.2146 13.4235 32.2146ZM11.3502 27.0417C12.3905 27.0417 13.2882 26.7709 14.0435 26.2295C14.7987 25.6737 15.3829 24.8899 15.7962 23.8781C16.2095 22.8664 16.4161 21.6693 16.4161 20.2872V20.2657C16.4161 18.8692 16.2095 17.6723 15.7962 16.6747C15.3829 15.6631 14.7917 14.8863 14.022 14.3449C13.2669 13.8035 12.3762 13.5326 11.3502 13.5326C10.3385 13.5326 9.44784 13.8105 8.6783 14.3662C7.92302 14.9078 7.32456 15.6844 6.88277 16.6961C6.45523 17.6936 6.24154 18.8835 6.24154 20.2657V20.2872C6.24154 21.6695 6.45523 22.8664 6.88277 23.8781C7.3103 24.8899 7.90877 25.6737 8.6783 26.2295C9.44784 26.7709 10.3385 27.0417 11.3502 27.0417ZM31.2955 21.762C31.3197 22.9296 31.5256 23.9341 31.9131 24.776C32.3407 25.6737 32.9462 26.3649 33.73 26.8493C34.5138 27.3196 35.447 27.5547 36.5301 27.5547C37.3851 27.5547 38.1262 27.4192 38.7531 27.1485C39.3801 26.8778 39.893 26.5358 40.2921 26.1225C40.6912 25.7092 40.9619 25.2889 41.1044 24.8615L41.1471 24.7332H46.8756L46.8115 24.9684C46.6404 25.809 46.3056 26.6569 45.807 27.512C45.3082 28.3669 44.6314 29.1507 43.7763 29.8632C42.9355 30.5757 41.9024 31.1457 40.6768 31.5732C39.4656 32.0007 38.0406 32.2144 36.4019 32.2144C34.0648 32.2144 32.0556 31.7371 30.3741 30.7824C28.6926 29.8134 27.3959 28.4382 26.4838 26.6569C25.5861 24.8756 25.1372 22.7666 25.1372 20.3298V20.3085C25.1372 17.8717 25.5861 15.7627 26.4838 13.9814C27.3959 12.1859 28.6711 10.8038 30.31 9.83467C31.963 8.85144 33.9081 8.35982 36.1454 8.35982C38.3826 8.35982 40.3135 8.83718 41.938 9.7919C43.5768 10.7325 44.838 12.0648 45.7214 13.7891C46.6191 15.5133 47.068 17.5297 47.068 19.8382V21.762H31.2955ZM31.3669 17.829H41.0763C40.9838 17.0412 40.8008 16.35 40.5272 15.7557C40.1141 14.8436 39.5369 14.1596 38.7959 13.7037C38.0691 13.2476 37.2213 13.0197 36.2523 13.0197C35.2832 13.0197 34.421 13.2547 33.6658 13.725C32.9249 14.1953 32.3405 14.8863 31.9131 15.7984C31.6423 16.3865 31.4603 17.0635 31.3669 17.829ZM52.5401 31.7443V0.899902H58.9954V13.4257H72.8892V0.899902H79.3446V31.7443H72.8892V18.7481H58.9954V31.7443H52.5401ZM89.265 21.762C89.2892 22.9296 89.4948 23.9341 89.8823 24.776C90.3102 25.6737 90.9155 26.3649 91.6992 26.8493C92.4828 27.3196 93.4164 27.5547 94.4994 27.5547C95.3543 27.5547 96.0954 27.4192 96.7223 27.1485C97.3495 26.8778 97.8624 26.5358 98.2614 26.1225C98.6604 25.7092 98.931 25.2889 99.0739 24.8615L99.1163 24.7332H104.845L104.781 24.9684C104.61 25.809 104.275 26.6569 103.776 27.512C103.277 28.3669 102.601 29.1507 101.746 29.8632C100.905 30.5757 99.8718 31.1457 98.646 31.5732C97.4351 32.0007 96.0103 32.2144 94.371 32.2144C92.034 32.2144 90.0252 31.7371 88.3434 30.7824C86.6622 29.8134 85.3651 28.4382 84.453 26.6569C83.5554 24.8756 83.1066 22.7666 83.1066 20.3298V20.3085C83.1066 17.8717 83.5554 15.7627 84.453 13.9814C85.3651 12.1859 86.6406 10.8038 88.2792 9.83467C89.9322 8.85144 91.8775 8.35982 94.1148 8.35982C96.3523 8.35982 98.283 8.83718 99.9072 9.7919C101.546 10.7325 102.807 12.0648 103.691 13.7891C104.588 15.5133 105.037 17.5297 105.037 19.8382V21.762H89.265ZM89.3363 17.829H99.0456C98.9532 17.0412 98.7703 16.35 98.4966 15.7557C98.0832 14.8436 97.506 14.1596 96.765 13.7037C96.0383 13.2476 95.1906 13.0197 94.2216 13.0197C93.2527 13.0197 92.3904 13.2547 91.635 13.725C90.8939 14.1953 90.3102 14.8863 89.8823 15.7984C89.6115 16.3865 89.4296 17.0635 89.3363 17.829ZM121.966 17.8188V16.4182C121.966 15.4065 121.646 14.6084 121.004 14.0242C120.364 13.4257 119.43 13.1265 118.204 13.1265C117.036 13.1265 116.11 13.3687 115.426 13.8533C114.742 14.3377 114.322 14.9504 114.164 15.6916L114.122 15.8838H108.415L108.436 15.6274C108.55 14.2166 109.013 12.9626 109.825 11.8654C110.652 10.7681 111.792 9.91315 113.245 9.30029C114.713 8.67331 116.452 8.35982 118.461 8.35982C120.442 8.35982 122.159 8.68051 123.613 9.32174C125.066 9.94872 126.191 10.8394 126.989 11.9937C127.802 13.1478 128.208 14.4945 128.208 16.0336V31.7443H121.966V28.3243H121.838C121.411 29.1079 120.855 29.7849 120.171 30.3548C119.501 30.9105 118.739 31.3452 117.884 31.6587C117.029 31.958 116.095 32.1076 115.084 32.1076C113.559 32.1076 112.219 31.8154 111.065 31.2312C109.911 30.6327 109.006 29.8134 108.35 28.7731C107.709 27.7186 107.389 26.5215 107.389 25.182V25.1393C107.389 23.7428 107.738 22.5529 108.436 21.5697C109.134 20.5722 110.146 19.7884 111.472 19.2184C112.796 18.6483 114.407 18.2993 116.302 18.171L121.966 17.8188ZM121.966 21.7154L117.242 22.0185C116.045 22.0898 115.133 22.3748 114.506 22.8736C113.879 23.358 113.566 24.0064 113.566 24.8186V24.8615C113.566 25.7022 113.887 26.3649 114.528 26.8493C115.169 27.3196 116.032 27.5547 117.115 27.5547C118.04 27.5547 118.867 27.3766 119.594 27.0204C120.335 26.6498 120.912 26.151 121.325 25.524C121.753 24.8828 121.966 24.1631 121.966 23.3652V21.7154ZM132.398 31.7443V0.899902H138.639V31.7443H132.398ZM151.956 32.2144C149.419 32.2144 147.538 31.68 146.313 30.6114C145.087 29.5425 144.475 27.7827 144.475 25.3317V13.5326H141.29V8.83013H144.475V3.22982H150.78V8.83013H154.97V13.5326H150.78V24.6477C150.78 25.7164 151.015 26.4645 151.486 26.892C151.97 27.3053 152.683 27.512 153.623 27.512C153.908 27.512 154.157 27.5048 154.371 27.4905C154.585 27.4621 154.784 27.4336 154.97 27.4051V31.9794C154.628 32.0363 154.2 32.0863 153.687 32.129C153.188 32.1861 152.611 32.2144 151.956 32.2144ZM158.561 31.7443V0.899902H164.802V12.7845H164.93C165.529 11.3595 166.42 10.2693 167.602 9.51413C168.799 8.74459 170.253 8.35982 171.963 8.35982C173.63 8.35982 175.063 8.73033 176.26 9.47136C177.457 10.1981 178.375 11.2312 179.017 12.5707C179.672 13.9103 180 15.5063 180 17.3587V31.7443H173.758V18.6413C173.758 17.0452 173.374 15.7984 172.604 14.9006C171.849 13.9886 170.759 13.5326 169.334 13.5326C168.422 13.5326 167.624 13.7535 166.94 14.1953C166.27 14.6227 165.743 15.2213 165.358 15.9907C164.987 16.746 164.802 17.6223 164.802 18.6198V31.7443H158.561Z" fill="url(#paint0_linear_962_721)"/>
        <defs>
          <linearGradient id="paint0_linear_962_721" x1="48.8015" y1="18.6177" x2="50.691" y2="18.7035" gradientUnits="userSpaceOnUse">
            <stop stopColor="#002117"/>
            <stop offset="1" stopColor="#19AD88"/>
          </linearGradient>
        </defs>
      </svg>
  );
};

export default Logo;
