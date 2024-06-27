PROCEDURE SP_VTU_OBTENER_ESTADOS(
    BUSCARFECHA IN VARCHAR2,
    IRUTPRESTADOR IN VARCHAR2,
    O_MENSAJE OUT VARCHAR2,
    O_ERROR OUT NUMERIC,
    OC_DATOS OUT SYS_REFCURSOR
)
IS
BEGIN
    
        OPEN OC_DATOS FOR 
            SELECT vcu.numerocuenta as IDCUENTA, vc.idcobroclinica as IDCOBRO, vp.IDESTADO, ve.NOMBREESTADO, vtp.fecharegistro AS FECHAESTADO, vtp.observacion AS "OBSERVACION", vtp.fecharegistro     
            FROM VTU_PATOLOGIA vp
            LEFT JOIN vtu_bitacora_patologia vtb ON vtb.idpatologia=vc.idpatologia AND trunc(vtp.fecharegistro) = TO_DATE(BUSCARFECHA)
            INNER JOIN VTU_CUENTA vcu ON vcu.idcuenta=vp.idcuenta
            INNER JOIN VTU_COBRO vc ON vc.idcuenta=vp.idcuenta
            INNER JOIN VTU_ESTADO ve ON vp.IDESTADO=ve.IDESTADO
            WHERE trunc(vtp.fecharegistro) BETWEEN TO_DATE(BUSCARFECHA)-1 AND TO_DATE(BUSCARFECHA) 
            AND vp.rutprestador=IRUTPRESTADOR
            --ORDER BY vtb.idbitacora DESC;

    O_MENSAJE := 'OK';
    O_ERROR := 0;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        O_MENSAJE := 'No se encontraron datos';
        O_ERROR := 999;
    WHEN OTHERS THEN
        O_MENSAJE := 'Otros Errores ' || '[ ' || SQLCODE || ' / ' || SQLERRM || ']';
        O_ERROR := 999;
END SP_VTU_OBTENER_ESTADOS; 