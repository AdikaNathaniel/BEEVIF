import urllib.request
import os

OUTPUT_DIR = r"c:\Users\12345\Desktop\Projects\BEEVIF\public\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    ),
    "Referer": "https://sites.google.com/view/beevif/",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "sec-fetch-dest": "image",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site",
}

images = {
    # --- LOGOS (=w16383 = max width, appears in site header) ---
    "logo_about_home.png": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBxLz5sicaEqf-mduCtVwJKtNH4Nr22aBif5aVOzVSMu2Mf2kGy_utajKy_JSkqSETTJvEcvTPR0s"
        "PD-FnYkz-IJG8GDwZIsDuiUoDl7tLxS8TApb20VTevVzLlt-m4C0qX7fK3_bfLhlmSeEZx12wMcNt8X2al"
        "Lr18byVpucdCdNyKemakOl-jVltw=w16383"
    ),
    "logo_work_involved.png": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBxK3t5W8plwVUyp5YENZQB4YIS8kGiu0yNCo9exjhR6hnXU4-zELN7GvAKZEj76Blm50cwqqyIqqu"
        "Q-IVKUKXJweFjj1j6RZ4gpjmwz2PQZhX83NqEIp5NNNXfRS7avXMY58EGQERbnMEZ6ikDizEY7_lPfyb2Fe"
        "1BlJ6myGdZ0vjTZGdnhOSyBpSO=w16383"
    ),

    # --- HOME PAGE ---
    "home_01.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUD58AmpWnz8g2877ps7E0Yhm7Pbx-U5rwQVd9F9RE3ZW3qZscyb_M4qLWWlIKRnGSttil8uYlh2cNT"
        "nQ8lBOFSr_zF94_QNxjdiCjrKPEo-SXpWpY0ZlWGQjqR-vr29ILSSDpg9rM03Cb9_JguJ5ZIaZiCTP05V8"
        "6fpnI5gYMiquy0VMkDP4Eu6uxqbx8oK9RzFymLPLjaD0nDwSvt0ULKVovBKD3Aro7RmdF2EUQI=w1280"
    ),
    "home_02.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUC24vgT9wWhUCTjlSnnbgQSI0OHyvc31-qj-GIZkNWdOHordUEXkpULa5pGEHutFqnhi6WPDWlQq9C"
        "3VnV2QEaxvDJOfJluoyKCY2Gi-LqJP4Z-ZGgauepoSTgNl6ng0_PB19wydjVk4UKDl6ow1ZRIY4U8v4y9JBB"
        "4fhRZKwWqVn_uAHdrv8GQE0BmjeglhM94CrtLVHVbwVXdl9ubmnm1GrZkuJajz0jymm7jVX4=w1280"
    ),
    "home_03.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUCZnKG4IlmvYwgtbTq-nHTOiMdJ5CTb8CVN20vhYpVeS_Pi7WvC7--0JzJgncvmH_A4LdmM-F3uEBqs"
        "1aQXrE18_Th7CcVW-9flWlIWomZZw09NGava-LUjz0La-xl0X4YOr5fXp18EdH-sz7lYkpUWPZ6QVU2MftRG"
        "5ls8tbcT_pXQwxaC61sdB8OqLgjjoXeWlB6N8WNPrCX0KX-X2g4lUx-TiEs1iLLZv3O1=w1280"
    ),
    "home_04.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUByh6HCs4-615oxVFRh3kwP0b8N3e19rEcoPObfCod6ZVY32RhLeHxN0pKSBy960YC-P0QRP3mtKBjQZ"
        "HcLmhNYepNWvrRN8fVv0NpO4-ts4YsdgQuT93fcc7WYUO6Rykm7oLJjdGEesZcOg66p1KmAbZzxjyhODIplyD"
        "WVH3w52NI0E3pVs5SfnDyhYrcgNXkOZCQUQNooHtHO_i56-_Cc00BfYc2nwgCZHQE2=w1280"
    ),
    "home_05.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBbpo92yKnVSviylZXSM6byJKvsXOcWXHp-fBYwnZe5imHV3reqOo6kyWz2An_6oj9lTxZLOl_UK7p3"
        "UiVxAgMwxV5qvpDIFHVh4xlMWdtlvsslGPAJr6DobOYJ2tW4DgdoO38ugcNjAk2hzJMKAiSRMnmyX9igaDY"
        "3CFdxF4U0KmUyf7CC2OORgvSheqrnF9UvXjtdxSXSfA2eX9EA5niGdvqVUkUujHQROW16=w1280"
    ),
    "home_06.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAnUNPd5imtkLAhFygV6MIvgGwpfmGyFJpIOBpyYsV43IWeYYz0MegRIyTnKuExuGWKpc4FCGmNyMQL"
        "44frOgl-Unagg6Iey7VoaDjq9OOlqKJmNATOTpJ6BJfjbsmmYGhhPz3XfPjgYN73bKB5n9E4LOrTUFeqvXZ3"
        "3gBhQndhVfo4vFSxnaZRvMzZ4citnPMWLieh"
    ),
    "home_07.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUDPzTtPsVoQnpG4j0KWCnftukqPtfkJTzaV3NR84-nlBOKS3y-7pJhj4_8Zrzwl7Oa9pvmUkWeb9nK"
        "wkrwxwj3Nj-pwAwr-3vjdnRNsw9DJ_BXJ5qgbjNf7Dy90Xkuao7Gzl6QgZf5d6bg69ylN8UMC80bZHd4G7h"
        "AZ7xR9FA58DgKVyTw8k0uRFL5rPYPbQQ"
    ),
    "home_08.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUD7o436v9HjOgASQkuyI0mPMZUaoJ6NvGyVgZICSW-KPUvSm85nUd2sRBWF4yHoPhpqlxSLD2k7RY_d"
        "O6rlc2Z0_LMiECbXYnPeU1_1Uyo4FeXzTXYfkYNtaCySeiCMaVl1KqPy_HOr9CspMEBDruZ9k0sFv7kTrHH"
        "K0OHvaPtTFi6tPs98AqMZ-PdRtWjNscNW2MVK"
    ),
    "home_09.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUD5oE961024TXdFtsLewEXaTrYKwitZpao5FrlvS3XFtywQBeA2kiWiliTfGizsXah6JXsqSbNfdlb6cd"
        "sKE5p0Hk0JKI6-LwiQpmP3nn2gwjStK-Iot0rT6EAT6PkJwywmjekpw1--1Sya0zfjnlvetfmlyIK7DHSTBk"
        "7O4mywx2Gz6CEMdMreJFqYiaGFLjmNvQ"
    ),
    "home_10.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBATDJW7-9jcL0qgQAXCGD8sJiZTw7OZMneIG3kz-gRtSV0XTtG65kCnMTJBwD9z0Tcu-Azu791upz"
        "p_yIWVhcPr_nkzuT17AXnQ0RUFUyG-MDPiJQZXwNO9iNtoD-uKV5Tl02WCyEj4E_vKwN-Hudy4tXV7LNnpB"
        "k_tpagEKQX_SbBxEeD7nSSMU3_wLBu93HKB_2X"
    ),
    "home_11.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUCBA7zA7X5FEqq5bVyDgPLDbv8WXosvneepnolCNqbbv0K4JPhM36E_gcEyh7NuoY-GnLUP2KpLS2D5"
        "DIO1pdYnnlz1Jd5IIiiMpFX8peDE9ElNkRhYiSzhoRMgrWFOJDXXaZrwaZnqomnp9kbjET_XWwvtGftdAfk7"
        "Ro0EPCv4BD4r7BPhJ_eqcGhQOjYqjHuBQPXX"
    ),

    # --- ABOUT PAGE ---
    "about_01.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUDPzuI3zpWWhFY1p_Vp-mhJbTdK0R72r_1HUUG1wvnLK9hQpmMwF_DCGPkbFNPg3RMvYAarYbWcxgS"
        "uHp5BlRMFYIwohRQwqFD-5ESQ71ZonwJhP7Wf7z8CbKDSfqhB3YT1UiV9RtjPNPBg64hqSet1M4HDOpA8kd"
        "nNv1AEgCgy4s6_hT6yrN-lvWgoi2-p48jKaxtfoE8CrVsZ8CLeQaSneCryxTV0SFuNeccB=w1280"
    ),
    "about_02.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUDPLIK8BVQ701qEGTypb0pOOjFqPPx56OkfAs7OoTtcT0dWJK6WqM1SudkZt_-9B3vaX_zoFSlWxqgO"
        "8jeUNx-sjPXXPHlPojWRa_i7jlS5tscHu65b6q3SbWIrGLg57Sq1gcs83tCCCgE7Kz_dOq9u2RTpAyy8WJh"
        "qdk423hLIy9GYgJ1_6xTojtbymnhMc3eMerL_qUFt1dyR12xPKxgOjpvjhDMtHK1mus5uL7g=w1280"
    ),
    "about_03.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUCMEGr98u9feoP2vUKfgLLPJ3FCcPC0P81cYIXzzJhSBcC_2NbOZ46UdJEpT6Lnh_nuRd6qNA3sqwF5"
        "PoqYC2k2s3P10Ox9OcC3LyDoeEdBv_U0uNROUN_AyvfWCOMchaN8IRO07hTKTAfzpI9A6rh6n-YF-RHVKeT8"
        "M51wcxeF1vTEEVeuqL3duUV7DLOl93-VYt05IYUgeTw64gi4NtJuQU70cZ1NsM5XhNr4D2Q=w1280"
    ),
    "about_04.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAZAIrcO8FFidxwgOjXWsaLbrokgqIg_82HQNU_kC80CMW3ID8t8BvhCgrbdxF7QwO4HapRSSDF6Q4i"
        "oF6ap_Uh105f_03wcoFb2CLwIjAbd6G9yA9JbS0sYJib_LXtfyvi1gAEGVi8MeRPETBElwoV4Ba4EVoqyPYq"
        "IL1vOoib_XqPrhlxucCnHbOi5CMyqYMC8IiwjXx3lokIGwKOS10FUwEHzTLSg5lizZTLQrU=w1280"
    ),
    "about_05.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUD2VEXJzE7n44fjNh9ZCf2K_cof5pguZ3bnMFpkpiVxd_tKGAtEa4ziAtzp9QsTmgHp6SYOCrFqIiFy"
        "5TRhDZxNYfhzf25xYJFbWuOxctB8Y5bSW63dQZY4nQWelfT9CkmunlWQhuBBZRFiz24BQvs2vpqZW83DkoGm"
        "sruoKGxPTW_kv16TT8wYVH1MeAEc4fkO_TKPSjjDvCQKULX0bAbl_JMPL2XAw5owSA4tLOc=w1280"
    ),
    "about_06.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUDyRf7034NTkZL0LvOLBmUuHXVQgU0Q2c7jsSd4_fZfWo1W6ZFeuv2pVMBCilNjER7hhLGbwSy_dScZ"
        "LmIsVaCEm3qIo0A0uU2H8xv4zJq1fcdxYDEPpJDHYC586S7W15VuGJE9OMjEUJQzFKMWhd52GmLrtGiCSW9"
        "yoZlh7raV9SukESzuA5B7ZEVhFQ27w"
    ),
    "about_07.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAR7QGfTKGH8bzyNYpdcSOduorQ_TWBpjSdvUYtLAf-joDYb8rGl9oJWGZ9zhBRJ_H2A0XNh-2z84JY"
        "iUWPjXhKVO9qFoXQoF2IDe5R9E-OzuCKDe65tzO-uofoq7YsYcUL_gWaLX7CXGseyrBvkiZCYbUwk7vuBxj"
        "08ZXtsVXRUq8-VPrrxqQi1i_iWY688VYA6Dhi"
    ),

    # --- OUR WORK PAGE ---
    "work_01.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBXGAegs6R_VUIbfcaMs1HNxwwtCptmX2SznR9xIdOiA5tG3kWZJiAH13FLEYrNNk5ZPTYDe1q38zO"
        "M6Q49bLSuWCDJB3zT1qFVtKjKcA8MZH5Bwdr0VgYP3cMtwEe0ElgkXzN3gEN9gnw_THYVQNb1_21b-prXS3"
        "ujjc-BWtro-wwMw9KEfU2dInk8DjbB0EQlVJN9RBoI-s88ZM6yofQeM-SGI4HViEjjH3oV=w1280"
    ),
    "work_02.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUCpSxioHPbCkAxbj0KiBMjMNpnN4iM2RWMPMxfZX1gGA1cn8nAP2idfDOdOsXX4ZxNcy-E8FZGUUXOd"
        "dupZ4lFqWq72wCV3QcIHfK1Kxc7oTbwZSZB2Vijjk18wDGRtt9opu1tuuDVFRDVggvEj_-lyC1Ue74GQS1N9"
        "-bppSZZUb-e7p2SQCxoyswIqGCkGtz0zfRnoK-BiJNPefLlegipHxDMSmPO5LPuU-ZzjKg=w1280"
    ),
    "work_03.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUADbnc2i6Tykm_iqIV0jwDM66mVR4cVyWV8xFoKmi4UEpVc3OPdiRPIxfzEEtBiIPzBfiRo5rzZrMZ8"
        "VuF7n-NSLnzn8LmhwN7Mm7vOi-i_9khKaA8fAXGoz9ApdwaNQcYRdYvKf2HBJa-X0Uz37wysXJOKMOCkSsab"
        "3UzwXX_gGwNqpOhFlMRppe_aXyRSCAj1Ua0YkkJNl4184sc21Nc-iJeyLKfFq5do2Ogd=w1280"
    ),
    "work_04.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAxmcdKbGBMhvOZDcsLgy_cQAjgsTwcYU_3k_LNZDolWLQE5ofSPuIRxTNPuD2C72UV0hsYlT2ZVs93"
        "Rten9c7_nKw_AWmJ-PD4YmgviEM9o8mC3JpumOAboIOUTmnvg6PPGZhzLdNpOOTEkQuYld8E-9hVC1jZWI9O"
        "JTca9_Spzboa9U4_m18OyccsXdrIYEcYrLAqpvr7wYOKhuSGHjBWl7hjy4bW3nhIrbMN-bQ=w1280"
    ),
    "work_05.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUA9knxlpBiTn8X9cOSlt0Kad9v2lyxc601-41d6abt5iGN8NlIV7JytQUZXNF4otEFoWTF379eGSOXA"
        "XKfqJzj5mfNWEc_LMGExRMuGReW2f0eaOw1HKosj9I_UIJ9v6h-Ey4ecRi4lZcrqys3XSMrHslg4mWVhzyC"
        "wB7zmR5qSUnRcBQOfe9t1B1EkGmI9Brsd1lJaEr1eYxiK2S8DRiCzrB-ic7f5XCT7IHrBQA=w1280"
    ),
    "work_06.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBp8nARg90NxIvk_iirFwUZQw1lnzS86N119sYia1Ry3YuMw5uxbXK40_6_204-Jlv7B_EjD2SaB_-n"
        "_KViJLG0t1dv5BchjOIRQEFGncvizeJawFwCs5uLOf3CtKk3WAIgXlSHxgCuUMQC0VGtrN2vEX88PZqYX6X9"
        "J6WiPScITsOCfC1YsQyTblANfpqEsw1GnKaI5rlZBr4Wra_BHHUfN-rStJuvhaMxDRPI2sE=w1280"
    ),
    "work_07.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBxbyVsGNxsLDBt94TF_zydMW82JqBAbTHNFVisAHuDxc9NU-PUfWqR_UUAbx80zo_-P3S5Te1ua8B3"
        "w48y35e9Tot-Ouk2oEDv2UiUiyuOglt_tgmD0SR_XdgrV5NWi4jJyoCqcrGW_eg-jPfoItpYCNiQPx1Wkj_G"
        "rgz1z1tNKCKeIf-5JbM7abM__IEI1AvqKW70msFyYGai9uk0A4nr0Rq_tDpSAFwScINd5Jo=w1280"
    ),
    "work_08.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUCYbYoowV8XIbzpuanEGAIJuAmwbkt34E_t76d63sebwvNKG4TaYubDvAgSXuLc37ALKsvD9dZmrdbNc"
        "g7YX9rD7TEHotAUtwyC8u51UENHlfdBtyG0a2RS-cA4dtiuRWr4fI-8kl14gxLRTK72TzwOt5f56XcSNp-zq"
        "h1gCKO1B6skPuSDgJtSFOaeanIcx4qJK9Ke1D4xix8B4yt8kaoz7POSzlj0MfBqiG4Z=w1280"
    ),
    "work_09.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUC6nmkU22EpGq8YPsfWzMK6ula7FYYnMMkJxyDfGkgafb3BvutYN9fvDrExRclR9f9QHBTa_NJ-2Woa"
        "bwiizKj0W0ZxD1yA9ETPxLEcIxziw5JPq5qFKCAK_VlUyXYWJ868iw_GSVSdxwlyadDllBqu4vNP9U7599u7"
        "sbPLB_rY0m9oewsZ6di1__dnxhPfD0B0qJjy"
    ),
    "work_10.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUD-BneaDRa2T80eUxvaDABYnh2wAOhgjEiMcRiWhes6v07fw1Ki1e49ZHZVkrypuZ7ofniy1NxATtDqI"
        "_iwwQqmL9UE72cg-um0ywl6bSGgOWHfnbL6IUU2zbTqhFiqvY7ItHoGXTesMqvG_6FhPDU10FGm42rVyNffH"
        "VXjMEJiTcFFZok_UQY-R8GvlGAZUg"
    ),
    "work_11.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAIDFnJHfXQWMms1Slpo4tH4dPt0qNvqc61FP-qeetfCLYPCbPdfHn-91BzLs-RceNDJ05kyJbbcHeR"
        "pV-u69BGhYEC_SHidIDKgmX5Nh2BWlMcV7EVmqVJf6vE9Keo-yjmIULPRUBp3x6WlhUfZw_8RTthzJpjFd-"
        "Q8yEeymotIrcmLN3GUAviWJ8HMSkEZeAAlJFW"
    ),
    "work_12.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUA1hYmsrzHkN42D52Nc-LTKSG1O2gAhooYSVL_EZA-4OAAHX-l5f9L7SXIKPtPHUffap7hB-JImva1F"
        "C0XI-pksVddVMGVs3urBWv2JqD5Ap0kPiXmjVNTQ239hEH26tdN2kvwfsRq3_dHDfX0TF24ivwoze3iGOjSOx"
        "ojWHAnMeG7lIHRiS7MPI8ObbHdc42lANw"
    ),
    "work_13.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBZz8iIY_QlWwBSR1Qj3yZJ651IsvcoqhwvhbPfmYOXVEandYUe-9x-oUvBkJxvVbMI6TtykLe_6Z__"
        "_yee9UAwJBr_TxV8OwDyNkz14M6dEBlOjsOXkzDy3oWns_eqyUZLo1yXyW3DJolEKu-iMr-W1zNMij6eilk"
        "j40vXWHpkslfAPoY8bPHe1EuJyHhhMEGdk-rE"
    ),
    "work_14.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBb0CLp_d5zcsuHYSUPcHSgcMCMNml3oJHmAOD5CwV8GKTX4et9nEQ69N1ywxcZXVk8QAOgku2Sa9HH"
        "j1yigXaa8SwH6OYbLxsrZvC1zHPASABf96KNYNzonr2B651S00hdvdoJBCqncE7Noc4q7KgYhhWqh0IXzNiIm"
        "RaAgUVeBVB1EMa18fUlVRLebJTREktFQFsl"
    ),

    # --- GET INVOLVED PAGE ---
    "involved_01.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUC2rPzqF8dgBnEGD4s1o-zUc7j4hAsNgqjRxZu5Bj78AWdEkLnoNq6roNshFWUxQvw2CsPNWdfmyQup"
        "3ITFDNdfr2YqSHpf7ztwZrq8Ushwy5u287OHAJw9757eMtiMhr5jaukJffXpjc8IXfzuAj_XKQOQdOFLDbGJ-"
        "cCd5Bv9RlNDYqjjkLn9bmiYREcbGyA_wjRpahR_8YMyNuwY4Mhi7h8MjeDvmGpaui3JSII=w1280"
    ),
    "involved_02.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUAW7xEKpJzAdJgBF2AeBBwLh3eJqrZdooj91_odZHNOq4Kru11XXIntti0WByyamLLgxA8_kzyToI7b-"
        "vQJg6TxUBI689dxxMR58eKzh2Ekjc8nSrjE1gmsWPjm4QXqPi9-Bfe8hmg7esL_DCEpfJ1UJDqhcMghF9TV6"
        "vJPm1bH1nEZwlu-re35dTIuOWY2pzImISquMIiY5uw1TUT4XUQIQSc2gcA45bcioi2-Hk4=w1280"
    ),
    "involved_03.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBEgsRpTo5ZziFwia060UV5RlDFvTE1lOH2yN4WPjPbT0RizShHfyVDoIawE1lBGeghJk9MZXXgfu81b"
        "4LbbWEh4TKkudUkdMnfO1XEFzbMoXDKRXD8gTEYNNJRSJl9ZyaU8wjCHfexvzQSQrBbLvt8QUcEtaAIllJC4"
        "Y9GNTnoLw7RQ0dx1mmq5j3CZS01N5RoDETfpfbQtZXZzZPhimmFgsJ7X5tpJOh-U3gid9A=w1280"
    ),
    "involved_04.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUBMrCw1DfC8fNDVq37zPTGbvjaRl1prz4Us9u0baYK78enQMJdwMOjEj8hmX4Gra9VpqC6c-95R0yHp"
        "qqim7fXHGSVB7jy4b9zMbkdvh_f1xw8DCZh7mEveTx3ZMt8gRcoRLr9SUcKzfoDkL58jQaBfDEU_kG3hPWtu"
        "eiCZ_6wmzbYhQytA_wzaBn5Uxdgu5W_vU2kvxs_3Av5RwJVbvdSybPSS5N4dpf3nisja=w1280"
    ),
    "involved_05.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUA0HkOwfw49sQ-qTwPp2k5er90llKS-i3G9omRNTKr-n7ZAzTp6RGjwVuWqQk8w_x_GiZyo0kWV8GWw"
        "qMmpvnaquRBcBo5Z3AEZ18hGbMVNg7Fbftgqw8Wz68h0Z3D7B71ZFvzdbtzmwv_5X-y0plVT7JBhMAqTxfCh1"
        "scpbFUoF4y5tQP8Lh8TyVV701HIF0m7SzG1Banakr_e9uSCa5bQFZMHq9bTlgkSDX02=w1280"
    ),
    "involved_06.jpg": (
        "https://lh3.googleusercontent.com/sitesv/"
        "AA5AbUDavss1mOq9tvCENbP3ljt4Vr3-xQNfkxObQKp7IfG4qyy1pU07-OuI5aAgh1At-p3pdq4F6XXbkzwX"
        "IJjtGJxR4GXo1v3aFOZ9D4-iMMY4u604YlpGlbjSto4NKl68LB_h-P4TEblL9U3DNmsYiDp7FI392iSalkNNP"
        "9MiAk9YP35iaH8iHXwmoZQRSpgSBQ9fTSsqABl6EtUHznCMVizxdWR1sglfgvpnkuk9ed4=w1280"
    ),
}

ok, fail = 0, 0
for name, url in images.items():
    dest = os.path.join(OUTPUT_DIR, name)
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        size_kb = len(data) // 1024
        print(f"  OK  {name:35s} ({size_kb} KB)")
        ok += 1
    except Exception as e:
        print(f" FAIL {name:35s} -> {e}")
        fail += 1

print(f"\nDone: {ok} downloaded, {fail} failed")
print(f"Saved to: {OUTPUT_DIR}")
