var mongoose = require("mongoose");
var Item = require("./models/item");
var data = [
    {
        name: " 4R Gift Card", 
        image: "https://lh3.googleusercontent.com/zXej1WT0EJvJSHNZLIHBYTIvGYArjp1gDVKoP2lToWwVJHIdOxbkBJLb0ym3WvPBHOMuXYgjwmbKxpxkFxQWLBtRpb3O1Bbd5czCOJGeMFvaOcbATJdAV2RAz62Q6MvS3bstOzYq3c5dqMjSRoRQCfpKG-IhYMfnZsahr1yi1htZUyyFGkL40dkEyz-JJIdbsWzeBhEJgT34vmwuQgwFBqXSi9qoWdjIQerueYeAf1lkfhrgh2T0dQrEXXe4kDyqUZp7gEWrt36yxcZ8n3ptnVfIRFw0d3QjdtvnqJhK4i5-HhtYnoU0BpiOVwlvmhGduxpB7NOZQuKoVDF42rDtn56DMLg_85BnRI5A0m6qLg05g1GNPn6_7dkJbX19NcmzfA77qNNjpkT2y_k4Tk9-k5m7VA9XltHq_Ndmotx4sIBii4P6urnT7nJEGMteYiWM-FDRRBYNO2R8Se30uQg19SnycFHy8mI-0-gxOnikAzGszlKWOTLlBOTlxUBxrbxznZFr8PN2IkTB5fwsAexhxD6TAs7V6vptwkiYtORX4abpoOlgvKEQbNF37HV6zCGQJmI-ZY-9UUX5FxYxr7QfHR2zMQ3YH3jPBPHBK_AV9mhj5Z2khWzeFe1A_5SiufGxEWFRZUOAyCSvoEy69GmtksnjvUC7neEm3FqXm00-YqyaTilfljTRk588ucP3fg=w558-h453-no?authuser=0",
        description: "To purchase a custom gift card amount, please call 1-844-4RIVERS.",
		price:"$10",
		type:"retail"
    },
	{
		 name: "4R SMOKEHOUSE COW TEE", 
        image: "https://lh3.googleusercontent.com/8JPrncBer4nZ_7OW-hSVy8BmM6qtFDMnWjFk4bU-ug8YyZywmSM2GoGEsdE1a1wfz9BiS664AoMWW0xG-SqxfZZjCSfAOLrG6VZ8kmIiswxKWeZ6jHknX8-Aisf-hxkppe89kGCf_gyIVVFwar6Ujvd3d9beOcrrzb7qFpnK5-gqh1NvTXIzqLTXx5glXfjfd--BimqNww5Tf5nWyaHmHDJsTNz2gZG6AdnBbN1gzIZl8Pn3fy4sWbu3O80CR2uWLN9Ghh-Vw-Whcci2L0usRn8_qAQzG-81Lk426YKYoN08M_3QrIemJXSfUsFpRFHX7_YsUI74F_irh8mcilo0qH1CeFZNYR4gpgY18XIR8uDrNWxthabaURy2rLrL4rWNbPiFOkkzGAdAXyLQopw-0J70273cTASzQeBWm3Ewdd5J2LOiZVE4x2FoUXNKFAPEbA3EcherfEfYHjdln8W7Ruiw_M5RLQELeLi_k7QF1jSw2TWagIki2uZf-WnzPW5ELUJvBh0s_fbSzqte0VQu5tT59JJKkcN_jqDMZY896QAPAKISFKtjKRtXQzr0vt29aMhRyGOKJIVKGHqnonDl-xqX6aDdc-R0L4CJRVbrTdirrQEDHkj7Z2w4FMACnPgFly7wBiBFLQStlbFIT4a7-dY0OXa5c89A1AoAzwu1pPbIN4nRFdtcnhIrEIxZIA=w588-h470-no?authuser=0",
	 description: "Everyone loves BBQ",
		price:"$15",
		type:"retail"	
	},
	{
		 name: "All Purpose rub", 
        image: "https://lh3.googleusercontent.com/s59Icyd5xfk5odGbVn9dbrZ5U0f2209vNVVNoIOoOZNNBHD020WtKfh5D_oTRbk58_3SMuhMFMXKkXspCCqnCiVoqhPTf-1tHMr_hq7ARmuzINREKn_HBy5HbnRM0l_nCPb-thfQpm45cchBb-kvPaeikd2qDtLjX5-FIXXlR8p-U302_zFCWbSA42AoTaYkCjOuy9R7BSkj5R6_vIDEw898BIzlhh9S9u2DDpa9YzRIjrqYYll0tFIXiJUno14va4p5VioarZdC-AthuVE9XSM22tXj_HzbdBj-lh8EyYvCyHGc52sYoSqx6U8RRmyLbt5w1Bm9kMwNYrTwtXvuqgRG1cMPaeBXXliXxeLkC0BL2dy_jKX5EULdut1ENuZcrrXleUomkfrYwbpqWDyrRVSJUFXJouVSFbsS2nqwtvbe51VvLt4keaHn2NNcH-HzMoMAsaKC4IeIDMNPIavxOAY-UC71Xq-yfRyqG6t_8krUU7As9gzbfrGgmacFvB6RwIIkKX4qeE0ng0uR0HfcUGyjaPJW43Sq0pHk19YmqOegTaRWE0emNqo0NtiYgxURVVaVGiVEyvdkbQRDY_RYqGVVT6cPFCUWyDO-g-Htfc_QOpNpBC8vKHQyuYJuEzh18guIJax67LkXRNV98z5yTgJ2jK0eiySYJKvkJvjvEkky0giGQqU5MB34T0yjvg=w545-h441-no?authuser=0",
	 description: "4 RIVERS SIGNATURE TASTE – Like all of our rubs, the founder, John Rivers, personally blended the 4R All Purpose Rub to bring together the favorite flavors of the South. His multi-regional recipe gives a creative blend of sweet and salty with a savory touch perfect for pork and poultry. No matter your method – roasting, slow-cooking, or grilling – 4R All Purpose Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "4 RIVERS BBQ SAUCE VARIETY PACK", 
        image: "https://lh3.googleusercontent.com/jNdPIbcrl2H6r17Vucsqs0UmNNwz8S3iBOlhDyXI7JWlRBlD_bakWfyM5LTrvvYcghmB3XZGvUAzbT7kG_sTwbISfGu2KQ7AzGVX0cumBtUlsM_jRg8q8BMokUVw5RuRdYxOtTtc6URmkCgqX4I2fIieaXtOGqOpRVLzKzY56Qsri0DTaZSNDu8qn4g-rRCpdAloJUBW-1n50RwJ21d-od4IcED82xNpGJlQda-_ftkcS1g1fWXNRVpD-z6UJ6F3s0xai1zXjTOsId7ngOTlWE2OQXHgorN8N7BiX6XiM68wLAJHUH5_SbV1aBzZSHBXlCR4xDy8_0cD6ZD83init_5pZflO8EShaZnD9qFSijhq_ra9Cygrp7zNUDmr-OZlfxm0TSYzqvvvLKDPnxsnrK99ZTjaXgwjt3abYnE_tn4w7fKcylksZ1hFYnhiFHq9X_irpQtHxJW5XHTbivT4AFQ4ntl84SjLxTfGWIzfjwqMtmHWEwlyMfq2DtcEaJmOO-rnROdwaK3qsF8lsrQhoi4y8R3AIQKJeeLOFjCtyJd5CWQih-ydoiksaGk_1h5embWhrzrILYqKvO4zdxLfdnppONM8AVbg9zh7ikIXk7_-bU_sHG7muaXIFLYH_AHl2X56lJEtZjtYKIg83FVIuPS0v1mZJAHM-JZIEUXBIlHMMvlxTSlljEqWB9RqYQ=w351-h293-no?authuser=0",
	 description: "The 4 Rivers BBQ Sauce Variety Pack includes three 16 fl. oz. bottles of each 4 RiversSmokehouse BBQ sauces. The variety pack includes 1 4R Signature BBQ Sauce, 1 Hot BBQ Sauce, and 1 Mustard Sauce. Buy it now on Amazon!",
		price:"$28.95",
		type:"food&sauces"	
	},
	{
		 name: "BOURBON BLENDED VANILLA EXTRACT", 
        image: "https://lh3.googleusercontent.com/BfRoifKABnWgEQNAi3LSQ7hYTRhZsywti1zcQ2egQDkZJMl_CTpmEqt-Sq4GOtwDdUaHGlIMrSVqBjuQVySE2fhrcb501MdVl_ESs58vIPnJe1ZaTVWzeotUyn29Wuf8utuTK9GZUwv8fKgewceMHM1dXOXFTDfmq3Hclmoy5ZN4G1Mz7nuQJozAjULf84PrM68ZbwUPZStrmg_HDkKTW8N3vK1AF9mckLVVOpAXFlutAmXY2nenC9ww05W41UQ6Pb3k8ybnm4X8bIMxLa0XgArRBlO-O_9EcoD-rrH3QFdCt1t1ms0FMuRu4eGo16ZOZINKIfu6HVRt7vXeunfb7gXczDDzdZGSdO5rjhRmJ27b2vnIBUsTBvPm4OrOmea3OxMO0mdC3l3gIQIqT-iRtNBGJTFlMcNoM_cabPrUb-y6Ml50jr3K75h_vV5xa2qWpVMbFHVUrcgYIx4IzJiaq9hshGolJXgo9PmWVACPzCYaZ-f86H_-ZqyS5qckaF5hVT95pEDumiNndN8dGcmXEr7a_44hmiNtHwDqAZJL9j2fKSHuC15kM3Kap7Zrz4iryApjes3r557h13TUIdoZTTwYkB7S5tbJrxHkRgpmVkfk73dVFFUZ1JVQSM9t7-HVZNpteSWy_baBeZeWSIsK-_uWvJos1nU18SaOhZzGMn7PfGQ8i5vAQluYQpOL_g=w415-h458-no?authuser=0",
	 description: "Slip into cakes, cookies, or anything that needs a daring hint of barrel aged bourbon and vanilla!",
		price:"$20.00",
		type:"food&sauces"	
	},
	{
		 name: "Brisket rub", 
        image: "https://lh3.googleusercontent.com/-0KFnYhA7ed92aEqr7mGXiOLIlEMUmJLPcXMJmgKx54y6vzOlCYdpAZqLcwCGlHvgFjJgwj3ZZd-PQ4X60mB3lnALzGmuaiOVZe8lQLn5prwIgHJTerJa_J4QFUW7pZJNjUXqPfDfP9NKD5eoeVCS2MEeziHPl-uPjdHtIrSTUk7BgIXHMdH9lNqN6wAgEmcJglDig7oByA_wLs5xXYhvLS97Q6dt0IeHQFcRn4PEEDvsdXJUM-pVsQFnYuNSrOlPtlVoiXai59mG_YPuFgOD6PGX7-qbYOON4A2bndJ1z-TFnPC6nbPGMac-gNsccDKrOsE7sNOl6b-qAs8NwxXaPgERMwcWAmk6PYjDgZHinRxrvpaR6oi5Dfan2ahrn-168DXMxrBwdigCNT0cnibAzv81FMDOoWabCvx2hJiLy4Q4Y2cnOmzfiLuLVSZdBmDbWsvjV4Ng9mgQhnAE6MN4lmzeGEFAGMT0C1cT0u4wGHAly3aIgpPG4Ikr3s4pmqpoQAwLd7p7vr0tX9I0ASJuw5U3VHdOYSJLE4SxtR-zWjw1RHGScV1oWOHQrJdJZz4q857nbLxTeHX-IbePtIpivM1HsSKVPV3xoiGWGm6T_66od-aEZvUAevsoDtlSJyK4_FGd9xZ6UNbtGOIVg7mclRXwBQ2Isu31C7g38Lm7oI5_c4PGglpmvjlfrWUQg=w554-h475-no?authuser=0",
	 description: "John Rivers personally blended the 4R Brisket Rub to bring together the favorite flavors of the South. His multi-regional recipe has just the right seasoning to enhance your brisket and other beef products. No matter your method – roasting, slow-cooking, or grilling – 4R Brisket Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "Coffee rub", 
        image: "https://lh3.googleusercontent.com/-IHVLCJn3tZ7odMpiTGLRv5p0dFFsbgFUNoqOPPx2dfuC_Uon2M5Kc_w_qVLFUORfemRwyybhok_dFYJNNKNF6Z9_h2vr1MMvU9pFgSgaLtFVAoSYVdzXHkzWN15bQFurlhnq3TGxmsE63X2QeVap_HOgfAbw9Apwt2CivwyX4DP3TIN7Caes9DklPQ_qWCRYKGe0nA_DaOtUZ4FFTEeipheK0RvRKKYcra2yNb9_3-Kr8n6U0_UHqF0oxVXShzo4h8VtDw3ErYG67fqUSrzgJqtB6aa-kpXl4xhkxkuQgFSdeXMgmxFA9aBsL7UO_l7lQtbklS_Lq4pJf4eIbFb5t4YveY9gfSNJujUOvT3TyswvqSYLlFS11SV30DxCgQiG7n0Oh_sqYWhBkZxI7hVdgZ4DSXVqZN33MJ_VXEXaC3725J3CFRb3mCrKAg3MPd-DKxiy-OodCXtspXZYDX0nBkMcnUf0Q_bCrzOqFBv0uoE9OdLuVCZS12KpkCtWmMCc8FauRHndGvRXDwpQv6DfuxQy5aRIU8DK-GltaApBrKAvvkJmllm6y3d45DGGfoCsX-zXgQKrptFQy-UqAsO6-KXy_COuyTVIrDvIzhCEy7i5swpMnqR3SlRyswqSs1dwP5stHblsDGFvXZH121XR9dJy6oY4zSh-a1OA71CbRQQgu4YpXuLN_xIXJiHOg=w549-h462-no?authuser=0",
	 description: "Like all of our rubs, our founder, John Rivers, personally blended the 4R Coffee Rub to bring together the favorite flavors of the South. His multi-regional recipe gives beef on the open flame a kick of flavor. No matter your method – roasting, slow-cooking, or grilling – 4R Coffee Rub is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "HOT BARBECUE SAUCE", 
        image: "https://lh3.googleusercontent.com/iwVHxUtWg3v6Z_Q5OofASST1Qq1mfbAzvcIrTw9Tm51imoVCfaKKCsPvg3go0fedq4sXePPdySjjic5hvjtH457aYoKuFn3brKN0d6jzNOsRVCpVqa946GzjPWF5hT27BWOru-ArezZTpGaYKzUVf_4ZZqxMYsP7vKnOk0ojlJiD5cRkusdG6bjYq85yR7mlCkqoBdwPP4CoINDQwGR-myPYqEGRrZ2CG-oSyL8isRnnhKrnOJFX3ixsOFjhNr0VbXJTKc1yLOPO4Os3A3YoTvbTU61PcnhanWf1y-_YZ0hbtP-FJBDFoG7__MtoNNapdwhmUdTeUZQNHR7kHJyCDjpFOF-epyZ4TfZj_-6a6VUuRF4iJKvJ2tTw94dMB95-uMukgyXA5jdQgxZtrgZJhSRR_pOhink5rvUADzrCzlRWClgqH7QbuTa5Hl-MDIOGowdoinMGDhvDMbQtZP0a4vjuCLtwVLH3vyKetYT4hVD3c6oOz3eYfY_9Mm56Twzh_WdNuNsOJSVF7qhRPOFFBFFdEl0VXlyzjrs1RSFx_xBqkateb2TiNI_2ClP8qSnOdb7tUAXu4pc7d--9spUWM0-AJSUMd7KUIZxGpfq5gwJsirdYDssJOWKkMP3soZ41DrbblI3ZVvz2R8UMua9pCBAqW0Ja3X3HRaD7GsM_Vi9txtYA1HJ6oHKpPQWS1g=w540-h461-no?authuser=0",
	 description: "Our founder, John Rivers, personally blended the 4 Rivers Smokehouse Hot BBQ Sauce to bring together the favorite flavors of the South. Similar to the 4 Rivers Signature BBQ Sauce with an extra layer of heat, his multi-regional recipe provides an ideal combination of sweet and savory with a smoky, spicy finish that complements pork, chicken, and beef. No matter your cooking method, 4R Hot BBQ Sauce is engineered to bring out the best in your food.",
		price:"$10.95",
		type:"food&sauces"	
	},
	{
		 name: "4R 10 YEAR ANNIVERSARY TEE", 
        image: "https://lh3.googleusercontent.com/h2RubVckAE0wBuj8qEQNpJPo9cLnCeLiLOQ5w8FB3mHTNL2h0rKUKvAipi9fNG_9jdgJqP8Mgthp-bN5iFdHsCnEdD_4d32UPrAx84GWBNixYI5I814PA0sRUWdXqWPEJQrzOtB6Y3IfYT3aFCdi-rIxgj2I1yUh9CbTqZGzRhsh8AS9bbP3CiT4ftWjIR_lNWsyKvmUVJ6Lr0e_zAQrAXkn1h-YlL602kwX5smnKcSe9LLWv78qtMCQzs5-CHDuW2C7r7yRtOoTVeWOf-OjgMXMLg9iK5BDQtMvspHL3koANLf6bj5GC62mYudNTiUbvNN-P074ByFw0HOKn0t2vqpkdhoOIoqZWA1qrmnaIPbmIpeTh-ZafQTsOUnW8e2gGeswVlUtEfeuZqoS04v_gOfatBfvE2ZIwYEATCfE7u7RDG5TOOUukn8Bk359VLBxQGnF4crRvbcHnQ3CA_WEMGs4GQ7RWxjrJpIoOciwqwc0wMqAWoINuPxz6pNoVUJEmMI5W49vQAAVaqmBvvXurfC5MClMGRU1fTZbx6QPlWD9uvtV_DuD59ATHpPv-DcqDvCHFYY1-xWEkbjdKRc7WSsxAxaEHgHSfXF5IdMJiP8jmS8cybcB1IIqLcCOZWQLqvsBlSR4bpsy4cifSjGsXn9KBnCvWj0JfPEY3ciovSRjZ4vRdMSrIc-zcAuvig=w563-h512-no?authuser=0",
	 description: "To purchase a ANNIVERSARY TEE, please call 1-844-4RIVERS.",
		price:"$15.00",
		type:"retail"	
	},
	{
		 name: "4R HOT BRISKET NOW TEE", 
        image: "https://lh3.googleusercontent.com/ah_cQ-mp2KlfuYl7jw04ZoLPcgyIJSq94cOqlJqyFCtChBc4paHZgGCtkjcycOAEZOQbJ1H3jyc-dxqSpsjchfvPKJC1NQzPrGjlSLj84DwU-wFI-xG95WkgoMsfSX8q_Ys2LGVtwAqYIwHX55d_sV8U8zCMpHilPbfyQQsveIn_LQVW9LbkKpDS_txvruJb7GTNK-NCefR1kkrHPOqIzQlyXOjRwk7y-EGotN7m7aIlgyJckX9ihhjKZ7_AoBSIF82A1_hcA5r1VHC36-2VkE9SpR05AK9BOBYFMEU0md5udQ2V-7mqRnMFg-E9W728yC0eNJQMNSieK2MpJ8GDu8KBrM85k9LNS9-ileyxez2aUVilfmR9Gh1m0GGkUVZGw7My8HEl9Q65Fb6E0SbhOhZs8yRZP6FwtP5wmwkEzi_bkX1imEOTSEqBAFqeCyZelUEqgtMUPQx54MPl7L9lAUrJYKsU_cshvWoz4fDKOwOZONJzGW8Yt9I2QRjw6pb3CfXEWC6RvBSohZ8ye_GRVdsKoI_ejB0JDKnZs7o2V2Q3x-OSGrobkgef-DBoF-M4B8xAqI8dAisRzUPFnafrnW8z_SwqiC1BmldrFNlBHhdM9Rq1klBeEC2sxzJJO1JL1BXAKTgfsHeCwigaSLQluwe9asfRBddQ-KyQwsMa4h27SKZ8ucoEGKlWlphJSQ=w578-h500-no?authuser=0",
	 description: "To purchase a custom gift card amount, please call 1-844-4RIVERS.",
		price:"$15.00",
		type:"retail"	
	},
	{
		 name: "BRISKET CANDLE", 
        image: "https://lh3.googleusercontent.com/i-aeNR0CsnH9iJQCPU-fovHuC3vTHcqCfx5bngSf1cwV-mf11zjtlRR2wTJm4iSSCVw7mIQvgnMyO_8V28o4lbSvtgKmOR6c5YCYzQAdrZjNXI96x7e7lfVD0P4NELBhPm04MM_QdA7WIAq8QqnXq6AUENfl99PFUPya-x_i8MfSSSZ13JuP-TmOVFnG_VKB8iNBFbU-E8LJxxsSC_1PT4QeYHwWzV6k9kf61fNLfO23-DH_QTQ3wqkbUM9GF_y_I0Z2cM_PzA6H9PBMNutsjhz0uluQVUDbE5gbbKXi0wVYSstQ1Rd4UPF3UdL1DNFrVe4d-p4os0fozIkgh2h5RAf9h8fstAksOnQweLwTLFxGoltEPhP2dZXxr3-Y5C758rz2bd1bB7ehOdJbtMv2eGK6ghbx4O5HT-vgudYbPd0JQaMpOCvllZSyStJMHqsaN2Fr76M5PBVcRdgoFFx7VL2d1pEszri9HAuLyPbWgubh_PaJo4PSOs1I88Xh9-mng0yn786-12Ho45u1-MbH2bJP3uJQDABwHL5WnhCkudMX-_4cGbjq6i8NWeh4wwhc-bSR19lrDva2eq7Ga_LZGEwwCeeeBoCQPAqD9aZMI1tGGeVvvCEJaLcG__AzfaaWUMCrsCPTWUGxu04F2zucf6DwF_Sio7f3580gNfoBxsvewpcMPAkxLAF-aB3lzQ=w574-h479-no?authuser=0",
	 description: "A unique scented candle that brings the allure of the 4 Rivers Smokehouse to your home! Each candle is handcrafted in small batches with great attention to detail to create the perfect blend of smoked brisket and aged hickory. The allure of the Brisket Candle is so authentic you’ll be tempted to grab a fork and take a biteurns approx. 17 hoursComes with brisket candle in glass votive, along with decorative box and wrap",
		price:"$16.95",
		type:"retail"	
	},
	{
		 name: "COOP GIFT CARDS", 
        image: "https://lh3.googleusercontent.com/FrOPkLXec4SVO3srV8cssri-mk9lLrblLE1Hs6SFlHfGLs8hCULI0foslpeTw7pBu_E_VCXXAnD9kxYvE5biztMzenB7BMo1mBL2GuHd6bBAvXRk13MrDeXEJdZBeZNmUM_IckvGWKEuNIAttuomwD9XJj-0b8BV2mxgJpIM8UQkPZsnP4uGv1OeflY_yVk2qJHZ-x348XyxSTYcHdle6j6xouXSddJgroTZ5CIBOF79xA2YpdrJUwQd2_mvT4wk7meJc5MktihSonIfp5fNyeUZnRdkT8RpxY0WJlDfOCUsVU6YETKr5O0k8EqfYfNEZaU4ERR1pTJviUWlIu2WS1cCTtIl4O5zKNcVGyy8mxvjtqcjQfye8ELG2NeWj6fpgnQaNoTyrchdJRTckH2WHKS_e1mNpWIlKvFoyg6ucTEeoD-GnYhlsZV1PWiq0Ju6e02_Ial7VLS6C_k7OiKc0RMEYg0iD3267Eaa8KEcSp_4JLKyJjNkleeZMA1TGka3Uu4qCcPBwH3SRl3r9RKtTwdVjkMVIy1t_koa9SkE11VLZxK68pwYcsZj_Og4nzXVIjsBVmjeznxcBNZ_bynosjVt3foR0YO9pXRavW-jipQUM7jNV9VCN-QNyo2IsEzMyTKenncAeowLYZ0B6xZxTJw5hS_Ptu9JUK45OzJVHbxVsSNPx1xLHoCLoqq--w=w384-h316-no?authuser=0",
	 description: "To purchase a custom coop gift card amount, please call 1-844-4RIVERS.",
		price:"$10",
		type:"retail"	
	}
	
]

function seedDB(){
	 Item.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Items!");
         //add a few campgrounds
        data.forEach(function(seed){
            Item.create(seed, function(err, item){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a item");
					item.save();
                    //create a comme
                }
            });
		});
	 });
}

module.exports = seedDB;