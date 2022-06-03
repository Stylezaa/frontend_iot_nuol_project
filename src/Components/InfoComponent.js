import React, { useState } from "react";

function InfoComponent() {
  const [closebtn, setClosebtn] = useState(true);

  return (
    <>
      {closebtn ? (
        <>
          <div className="ease-in-out duration-300 text-center justify-items-center items-center mx-auto shadow-md rounded-sm fixed inset-x-0 top-24 w-11/12 h-fit lg:w-1/3 z-50">
            <header className="w-full bg-blue-500 rounded-t w-full flex justify-between items-center h-12">
              <div className="w-[90%]">
                <h1 className="text-white font-semibold">Sensor</h1>
              </div>
              <div className="w-[10%]">
                <span onClick={() => setClosebtn(!closebtn)} className="text-3xl cursor-pointer text-white lg:px-4">&times;</span>
              </div>
            </header>
            <div className="relative overflow-y-auto h-full rounded-b bg-white">
                <p className="px-5 py-2 text-justify">
                    1)	ຄ່າຄວາມເປັນກົດ-ດ່າງ ( pH = potential of hydrogen ).
                    ແມ່ນຄ່າທີ່ສະແດງປະລິມານຄວາມເຂັ້ມຂຸ້ນຂອງ Hydrogen ion (H+) ຖືກນໍາໃຊ້ເພື່ອບອກຄວາມເປັນກົດ - ເປັນດ່າງ ໃນນໍ້າວ່າມີຫຼາຍ ຫຼື ໜ້ອຍພຽງໃດ ເຊິ່ງຄ່າ pH ຈະຖືກກຳນົດເປັນຕົວເລກທີມີຄ່າເລີມຈາກ 0-14 ເພື່ອສະແດງປະລິມານຄວາມເຂັ້ມຂຸ້ນຂອງ Hydrogen ion (H+) ໃນນໍ້າ.
                    ດັ່ງນັ້ນ, ຄ່າ pH ຈະມີຂອບເຂດດັ່ງນີ້: 
                    <br/>
                    {/* < 7 ເປັນກົດ
                    = 7 ເປັນກາງ
                    > 7 ເປັນດ່າງ */}
                    2)	ຄ່າໄຟຟ້າບັນຈຸ ( Ec =  Electro Conductivity).
                    ແມ່ນການນຳກະແສໄຟຟ້າ ເກື່ອ ຫຼື ສານເຄມີອື່ນໆທີລະລາຍໃນນໍ້າ ເຊິ່ງຊ່ວຍໃນການລະບຸຄວາມບໍລິສຸດຂອງນໍ້າ, ເພື່ອໃຫ້ຮູ້ປະລິມານແຮ່ທາດໃນນໍ້າ ແລະ ນໍ້າທີມີຄວາມບໍລິສຸດຫຼາຍຈະມີການຊັກນຳໄຟຟ້າຕໍ່າ. ຄ່າ Ec ແມ່ນມີຄວາມສຳຄັນໃນການບອກວ່າແຮ່ທາດໃນນໍ້ານັ້ນເໜາະສົມກັບການນຳໄປໃຊ້ໃນດ້ານໃດ. 
                    <br/>
                    3)	ອອກຊີເຈັນໃນນໍ້າ ( DO = Dissolved oxygen ).
                    ແມ່ນຈໍານວນຂອງອອກຊີເຈນທີ່ມີຢູ່ໃນນ້ໍາ ເຊິ່ງແຫຼ່ງນ້ໍາໄດ້ຮັບອອກຊີເຈນຈາກບັນຍາກາດແລະຈາກພືດນ້ໍາ. ປະລິມານອອກຊີເຈນທີ່ລະລາຍໃນນ້ຳແມ່ນສາມາດບອກພວກເຮົາກ່ຽວກັບຄຸນນະພາບຂອງແຫຼ່ງນ້ຳນັ້ນ.
                </p> 
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default InfoComponent;
