import React, { useState } from "react";

function AboutPopup() {
  const [closebtn, setClosebtn] = useState(true);

  return (
    <>
      {closebtn ? (
        <>
          <div className="bg-white ease-in-out duration-300 text-center justify-items-center overflow-y-auto items-center mx-auto shadow-md rounded-sm fixed inset-x-0 top-20 w-11/12 lg:w-1/3 z-50">
            <header className="w-full bg-black rounded-t flex justify-between items-center h-12">
              <div className="w-[90%]">
                <h1 className="text-white ml-14 font-semibold">ກ່ຽວກັບເຮົາ</h1>
              </div>
              <div className="w-[10%]">
                <span onClick={() => setClosebtn(!closebtn)} className="text-3xl cursor-pointer text-white lg:px-4">&times;</span>
              </div>
            </header>
            <div className="relative flex flex-col items-center h-full rounded-b pb-2">
                {/* <p className="px-5 py-2 text-justify indent-24">
                    ກ່ຽວກັບເຮົາ
                    ພວກເຮົາເປັນກຸ່ມນັກສຶກສາທີ່ຮຽນຢູ່ຄະນະວິສະວະກຳສາດ ພາກວິສະວະກະຄອມພິວເຕີ 
                    ແລະ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ ປັດຈຸບັນພວກເຮົາກຳລັງສຶກສາຢູ່ປີ IV ຫ້ອງ 4Computer1.
                    ສາເຫດທີ່ພວກເຮົາເຮັດບົດໂຄງການຈົບຊັ້ນກ່ຽວກັບ ລະບົບກວດວັດຄຸນນະພາບຂອງແຫຼ່ງນໍ້າສາທາລະນະດ້ວຍເຕັກໂນໂລຊີ IoT ຂື້ນມາຍ້ອນ ພວກເຮົາເຫັນວ່າ
                    ປະຊາຊົນທົ່ວໄປມີຄວາມຫຍຸ້ງຍາກໃນການເຂົ້າເຖິງຂໍ້ມູນກ່ຽວກັບສະພາບແຫຼ່ງນໍ້າທີຕົນອາໄສຢູ່ ຍ້ອນຂໍ້ມູນທີກ່ຽວຂ້ອງຖືກເກັບໄວ້ໃນຮູບແບບເຈ້ຍເອກະສານ ຫຼື  File Word, Excel ແລະ ເປັນຂໍ້ມູນເຊິງວິຊາການເຮັດໃຫ້ບໍ່ສະດວກໃນການເຜີຍແຜ່ສູ່ທາລະນະຊົນ
                    ຍ້ອນຂໍ້ມູນບາງສ່ວນຍັງເກັບເປັນຄວາມລັບຂອງໜ່ວຍງານວັດແທກຕ້ອງມີຄ່າໃຊ້ຈ່າຍໃນການເຂົ້າເຖິງຂໍ້ມູນເຫຼົ່ານັ້ນ, ການລົງວັດແທກຂໍ້ມູນຄຸນນະພາບນໍ້າແຕ່ລະຄັ້ງມີຄວາມຫຍຸ້ງຍາກໃຊ້ເວລາ ແລະ ງົບປະມານ
                    ການລົງວັດແທກສ່ວນໃຫ່ຍແມ່ນເປັນການວັດແທກຂໍ້ມູນເຊິງວິຊາການທີຈຳເປັນຕ້ອງໃຊ້ເຄື່ອງມືທີມີລາຄາແພງ, ມີຄວາມແມ້ນຍໍາຄວາມລະອຽດສູງ ແລະ ມີຂັ້ນຕອນປະຕິບັດຫຼາຍຂັ້ນຕອນ. ສະນັັ້ນ, ພວກເຮົາຈຶ່ງສ້າງລະບົບກວດວັດຄຸນນະພາບຂອງນໍ້າດ້ວຍເຕັກໂນໂລຊີ IoT ຂື້ນມາ ຍ້ອນຕ້ອງການສະໜອງຂໍ້ມູນໃຫ້ປະຊາຊົນສາມາດເຂົ້າເຖິ່ງໄດ້ງ່າຍ.
                </p> */}
                <img
                  src={require(`../../assets/Info/FinalPoster.jpg`)}
                  alt="DO"
                  className="w-11/12 border-2 border-blue-900 mt-2 mb-0 rounded"
                />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AboutPopup;