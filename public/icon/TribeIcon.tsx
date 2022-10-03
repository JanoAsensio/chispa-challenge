import { Icon } from "@chakra-ui/react";
import React from "react";

const TribeIcon = (props) => (
  <Icon
    width="69px"
    height="30px"
    viewBox="0 0 69 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.4634 2.86749C20.4924 2.98335 20.5069 3.11369 20.5069 3.25851C20.5069 3.37437 20.4634 3.47574 20.3765 3.56264C20.3186 3.62056 20.2462 3.66401 20.1593 3.69297C20.0724 3.72194 20.0145 3.75091 19.9855 3.77987C19.3483 3.98262 18.8269 4.084 18.4214 4.084C18.1318 4.084 17.7987 4.01159 17.4222 3.86676C17.1325 3.60608 16.7849 3.41781 16.3794 3.30195C15.9739 3.1861 15.134 3.08472 13.8595 2.99783C13.0196 3.08472 12.281 3.12817 11.6437 3.12817C11.441 4.19986 11.1079 5.15569 10.6445 5.99566C10.5286 6.54598 10.3693 7.03838 10.1665 7.47285C9.9638 8.05214 9.8769 8.38523 9.90587 8.47212C9.81897 8.58798 9.54381 9.32658 9.08038 10.6879C8.61695 12.0203 8.18248 13.3237 7.77697 14.5981C7.48733 15.496 7.27009 16.1477 7.12527 16.5532C6.98045 16.8429 6.79218 17.3063 6.56046 17.9435C6.35771 18.5518 6.21289 18.9862 6.126 19.2469L5.03983 22.2448C4.80811 22.6792 4.51847 23.3744 4.17089 24.3302C3.85228 25.2571 3.5916 26.097 3.38885 26.8501L2.95438 28.3707C2.80956 28.8921 2.67922 29.2831 2.56336 29.5438C2.47647 29.8045 2.40406 29.9493 2.34613 29.9783C2.2882 30.0072 2.14337 30.0072 1.91166 29.9783C1.67994 29.9783 1.41926 29.79 1.12962 29.4135C0.868936 29.0659 0.738595 28.7183 0.738595 28.3707C0.738595 27.7335 0.955829 26.6618 1.3903 25.1557C1.85373 23.6495 2.2882 22.4475 2.6937 21.5496C2.80956 21.0282 2.91093 20.6083 2.99783 20.2896C3.11369 19.971 3.1861 19.7393 3.21506 19.5945C3.30195 19.4786 3.4323 19.1745 3.60608 18.6821C3.80883 18.1608 3.96814 17.6828 4.084 17.2484C4.17089 16.727 5.06879 13.8161 6.7777 8.51557L7.08183 7.60319C7.34251 7.16872 7.58871 6.61839 7.82042 5.95221C8.05214 5.80739 8.168 5.50326 8.168 5.03983C8.168 4.95293 8.21144 4.83707 8.29834 4.69225C8.41419 4.54743 8.47212 4.44605 8.47212 4.38812C8.53005 4.33019 8.58798 4.19985 8.64591 3.9971C8.7328 3.76539 8.83418 3.5916 8.95004 3.47574V3.4323L8.25489 3.47574L6.126 3.69297L5.17017 3.77987C3.49022 3.92469 2.51991 4.02607 2.25923 4.084C1.3903 4.14193 0.76756 4.09848 0.391021 3.95366C0.0434469 3.80884 -0.0724112 3.51919 0.0434467 3.08472C0.13034 2.73715 0.304127 2.47647 0.564808 2.30268C0.854453 2.12889 1.28892 1.99855 1.86821 1.91166C2.12889 1.85373 2.63577 1.76684 3.38885 1.65098L4.56191 1.43374L6.0391 1.25996C7.71904 0.999275 9.50036 0.825489 11.3831 0.738596C12.1651 0.70963 12.8168 0.680665 13.3382 0.651701C13.8885 0.593773 14.2505 0.550327 14.4243 0.521362C14.8298 0.550327 15.4815 0.622738 16.3794 0.738596C17.3063 0.854454 17.9725 0.984795 18.378 1.12962C19.0152 1.27444 19.4786 1.47719 19.7683 1.73787C20.0869 1.99855 20.3186 2.37509 20.4634 2.86749Z"
      fill={`${props.color}`}
    />
    <path
      d="M14.1606 26.546C13.9289 26.3722 13.7696 26.2129 13.6827 26.0681C13.5958 25.9232 13.5523 25.706 13.5523 25.4164C13.5523 25.1557 13.5668 24.9385 13.5958 24.7647C13.6827 23.7799 13.8999 22.6358 14.2475 21.3324L14.4647 20.4634C14.5516 19.7393 15.0585 18.2187 15.9854 15.9015C16.9122 13.5844 17.6653 12.0058 18.2446 11.1658C18.4763 11.021 18.7225 10.9486 18.9832 10.9486C19.3597 10.9486 19.6783 11.0789 19.939 11.3396C20.1128 11.4555 20.1997 11.6727 20.1997 11.9913C20.1997 12.281 20.0838 12.7154 19.8521 13.2947C19.6494 13.845 19.2873 14.6705 18.766 15.7712C18.6501 16.0029 18.4473 16.4374 18.1577 17.0746C17.897 17.7118 17.7667 18.0883 17.7667 18.2042C17.7667 18.2621 17.7812 18.2911 17.8101 18.2911C17.8681 18.2911 17.926 18.2766 17.9839 18.2476C18.0418 18.1897 18.0998 18.1463 18.1577 18.1173C18.4763 17.567 19.2439 16.8139 20.4604 15.8581C21.7059 14.9022 22.5603 14.3085 23.0237 14.0768C23.2265 13.9609 23.4872 13.845 23.8058 13.7292C24.1244 13.6133 24.3416 13.5264 24.4575 13.4685C24.9209 13.2368 25.4712 13.1209 26.1085 13.1209C26.514 13.1209 26.8615 13.1933 27.1512 13.3382C27.4698 13.454 27.687 13.6423 27.8029 13.903C27.8319 14.1057 27.9043 14.265 28.0201 14.3809C28.1649 14.4967 28.2663 14.5692 28.3242 14.5981C28.4111 14.5981 28.4691 14.6416 28.498 14.7285C28.527 14.7864 28.5415 14.8298 28.5415 14.8588C28.5415 15.0616 28.4256 15.1919 28.1939 15.2498C27.9622 15.2788 27.5422 15.3077 26.934 15.3367C26.6153 15.3657 26.2822 15.4381 25.9347 15.5539C25.5871 15.6698 25.2395 15.8146 24.892 15.9884C23.2699 16.9153 22.0534 17.6394 21.2424 18.1608C20.4604 18.6821 19.6639 19.3917 18.8528 20.2896C18.5342 20.6372 18.1143 21.26 17.5929 22.1579C17.3901 22.3606 17.1729 22.8965 16.9412 23.7654C16.7384 24.6054 16.6371 25.1267 16.6371 25.3295C16.6081 25.4164 16.5502 25.5902 16.4633 25.8508C16.3764 26.0825 16.246 26.3143 16.0723 26.546C15.7247 27.0094 15.435 27.2411 15.2033 27.2411C14.9426 27.2411 14.5951 27.0094 14.1606 26.546Z"
      fill={`${props.color}`}
    />
    <path
      d="M33.8956 9.03693C33.6929 8.83418 33.5191 8.4866 33.3743 7.99421C33.2294 7.50181 33.2294 7.25561 33.3743 7.25561C33.606 7.22665 33.8667 6.98045 34.1563 6.51702C34.4749 6.02462 34.6197 5.61912 34.5908 5.30051C34.5908 5.18465 34.6342 5.08327 34.7211 4.99638C34.808 4.88052 34.9094 4.80811 35.0252 4.77915C35.257 4.63432 35.4597 4.56191 35.6335 4.56191C36.1259 4.56191 36.5748 4.90949 36.9803 5.60463C37.1541 5.98117 37.241 6.31427 37.241 6.60391C37.241 6.86459 37.1686 7.13975 37.0238 7.4294C36.879 7.69008 36.6183 8.03765 36.2417 8.47212C35.7493 9.13831 35.2859 9.4714 34.8514 9.4714C34.5618 9.4714 34.2432 9.32658 33.8956 9.03693ZM29.6813 26.6763C29.2758 26.2708 29.073 25.6915 29.073 24.9384C29.073 24.5329 29.1454 24.1854 29.2903 23.8957C29.2903 23.7509 29.3192 23.5771 29.3772 23.3744C29.4351 23.1716 29.464 23.0413 29.464 22.9833C29.4351 22.8096 29.5509 22.3316 29.8116 21.5496C30.333 20.391 31.0281 18.349 31.8971 15.4236C31.8971 15.2788 31.955 15.1629 32.0709 15.076C32.1867 14.9602 32.3605 14.8878 32.5922 14.8588C32.8239 14.8009 32.9832 14.7719 33.0701 14.7719C33.2439 14.7719 33.3887 14.8443 33.5046 14.9891C33.6494 15.105 33.8377 15.3367 34.0694 15.6843C34.2432 15.8581 34.3301 16.1188 34.3301 16.4663C34.3301 17.0167 34.1418 17.6828 33.7653 18.4649C33.3887 19.3049 33.1425 20.029 33.0267 20.6372C32.6791 21.4193 32.4039 22.1434 32.2012 22.8096C32.1433 22.9833 32.0564 23.3309 31.9405 23.8523C31.8247 24.3736 31.6653 24.7936 31.4626 25.1122C31.2888 25.9232 31.1295 26.4881 30.9847 26.8067C30.8399 27.1253 30.6806 27.2846 30.5068 27.2846C30.304 27.2846 30.0289 27.0818 29.6813 26.6763Z"
      fill={`${props.color}`}
    />
    <path
      d="M40.6961 26.7632C40.5802 26.7922 40.4064 26.8067 40.1747 26.8067C39.4506 26.8067 38.7554 26.4446 38.0893 25.7205C37.9444 25.5177 37.872 25.3584 37.872 25.2426C37.872 25.1267 37.9155 25.0253 38.0024 24.9384C38.0892 24.8516 38.2051 24.8081 38.3499 24.8081C38.4658 24.8081 38.5382 24.6633 38.5672 24.3736C38.6251 24.055 38.683 23.6206 38.7409 23.0702C38.7699 22.7227 38.8423 22.3896 38.9582 22.071C39.074 21.7234 39.132 21.4917 39.132 21.3758C39.1609 21.2889 39.1899 21.0572 39.2189 20.6807C39.2768 20.2752 39.3637 19.9276 39.4795 19.6379C39.6533 18.8849 39.9285 17.8277 40.305 16.4663C40.7105 15.076 41.0436 14.0333 41.3043 13.3382C41.3622 12.8168 41.6664 12.0203 42.2167 10.9486C42.767 9.41347 43.6215 7.34251 44.7801 4.7357C45.9386 2.12889 46.6483 0.651701 46.9089 0.304126C47.1696 0.101375 47.4158 0 47.6475 0C48.0241 0 48.3861 0.173787 48.7337 0.521362C48.9654 0.839971 49.0813 1.1441 49.0813 1.43374C49.0813 1.81028 48.893 2.23027 48.5165 2.6937C48.4006 2.89645 48.2703 3.14265 48.1255 3.4323C47.9806 3.69298 47.8358 3.95366 47.691 4.21434C47.5172 4.7357 47.1407 5.60463 46.5614 6.82114C45.7504 8.50109 45.0842 10.0797 44.5628 11.5568C44.3601 12.0203 44.1428 12.5561 43.9111 13.1644C43.7084 13.7726 43.5635 14.1202 43.4767 14.2071C43.3608 14.7285 43.187 15.2498 42.9553 15.7712C42.5787 16.9298 42.347 17.7553 42.2601 18.2476L43.8242 16.727C45.0118 15.4526 46.1703 14.4388 47.3 13.6857C48.4296 12.9037 49.3709 12.5127 50.124 12.5127C50.7323 12.5127 51.3984 12.7444 52.1226 13.2078C52.8467 13.6713 53.3246 14.1781 53.5563 14.7285C53.7591 15.2209 53.8604 15.6843 53.8604 16.1188C53.8604 17.3642 53.2667 18.74 52.0791 20.2462C51.7895 20.7676 51.4129 21.2889 50.9495 21.8103C50.515 22.3027 50.124 22.6792 49.7764 22.9399C48.9944 23.664 48.4875 24.113 48.2558 24.2867C47.9372 24.5185 47.6331 24.7212 47.3434 24.895C47.0827 25.0398 46.7641 25.1702 46.3876 25.286C45.8373 25.6626 45.0842 25.9667 44.1283 26.1984C43.2015 26.4012 42.0574 26.5894 40.6961 26.7632ZM41.8257 24.5474C42.1732 24.5474 42.5932 24.4895 43.0856 24.3736C43.578 24.2578 44.027 24.055 44.4325 23.7654C45.678 23.1282 46.7931 22.3172 47.7779 21.3324C48.7627 20.3476 49.5158 19.3483 50.0371 18.3345C50.5874 17.3208 50.8626 16.4663 50.8626 15.7712C50.8626 15.1919 50.6164 14.9022 50.124 14.9022C49.7185 14.9022 49.1392 15.1484 48.3861 15.6408C47.6331 16.1332 46.7931 16.8284 45.8662 17.7263C45.2 18.3345 44.3311 19.2614 43.2594 20.5069C43.2594 20.5069 42.9987 20.811 42.4774 21.4193C42.4194 21.5062 42.2891 21.7234 42.0864 22.071C41.8836 22.3896 41.7677 22.6792 41.7388 22.9399C41.6519 23.3744 41.6084 23.7219 41.6084 23.9826C41.6084 24.3592 41.6809 24.5474 41.8257 24.5474Z"
      fill={`${props.color}`}
    />
    <path
      d="M60.3588 28.197C59.1133 28.197 58.0851 27.7335 57.2741 26.8067C56.4631 25.8798 56.0575 24.7212 56.0575 23.3309C56.0575 21.9406 56.3617 20.42 56.9699 18.769C57.6072 17.0891 58.4182 15.5829 59.403 14.2505C60.3877 12.9182 61.387 12.0203 62.4008 11.5568C62.9801 11.2382 63.6318 11.0789 64.3559 11.0789C64.9062 11.0789 65.5289 11.2382 66.2241 11.5568C66.7165 11.7596 67.093 12.0058 67.3537 12.2954C67.6144 12.5851 67.8461 13.034 68.0489 13.6423C68.1358 14.1637 68.1792 14.5257 68.1792 14.7285C68.1792 14.9022 68.1068 15.2788 67.962 15.8581C67.6144 16.9298 67.151 17.8421 66.5717 18.5952C66.0213 19.3193 65.2972 19.9421 64.3993 20.4634C63.9359 20.7531 63.3566 20.8979 62.6615 20.8979C62.0532 20.8979 61.4739 20.7965 60.9236 20.5938C60.4022 20.3621 59.9967 20.029 59.7071 19.5945L59.403 19.2469L59.2726 19.5945C58.6644 21.1586 58.3602 22.4909 58.3602 23.5916C58.3602 24.3447 58.5051 24.9529 58.7947 25.4164C58.9974 25.735 59.4898 25.8943 60.2719 25.8943C60.8512 25.8943 61.2712 25.8364 61.5318 25.7205C61.9663 25.5757 62.3428 25.4019 62.6615 25.1991C63.009 24.9674 63.3421 24.7357 63.6607 24.504L63.8345 24.4171H63.7911C64.1386 24.2433 64.4283 24.084 64.66 23.9392C64.8917 23.7944 65.051 23.693 65.1379 23.635C65.1959 23.635 65.2538 23.6206 65.3117 23.5916C65.3696 23.5626 65.4276 23.5047 65.4855 23.4178C65.7462 23.302 66.0503 23.3454 66.3979 23.5482C66.7455 23.7509 66.9192 24.0116 66.9192 24.3302C66.8613 24.5619 66.6006 24.9385 66.1372 25.4598C65.6738 25.9812 65.3262 26.2563 65.0945 26.2853C65.0655 26.2853 64.9641 26.3287 64.7904 26.4156C64.6166 26.5025 64.5007 26.5749 64.4428 26.6329H64.4862C64.2255 26.9804 63.9649 27.1542 63.7042 27.1542H63.3566C63.2407 27.386 62.8497 27.6177 62.1835 27.8494C61.5463 28.0811 60.9381 28.197 60.3588 28.197ZM62.3139 18.6387C63.1828 18.6387 63.9793 18.1463 64.7035 17.1615C65.3986 16.2346 65.7462 15.3077 65.7462 14.3809C65.7462 13.8885 65.6448 13.5409 65.4421 13.3382C65.2683 13.2513 65.109 13.2078 64.9641 13.2078C64.8193 13.2078 64.5731 13.2513 64.2255 13.3382C63.849 13.4251 63.2697 13.8306 62.4877 14.5547C61.7056 15.2498 61.1263 15.8726 60.7498 16.4229L60.185 17.3353C60.4167 17.2484 60.6339 17.2049 60.8367 17.2049C61.0684 17.176 61.1987 17.1904 61.2277 17.2484C61.2277 17.6539 61.3291 17.987 61.5318 18.2476C61.7346 18.5083 61.9953 18.6387 62.3139 18.6387Z"
      fill={`${props.color}`}
    />
  </Icon>
);

export default TribeIcon;