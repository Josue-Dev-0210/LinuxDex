const COMANDOS = [
{ cmd: 'ls -la',desc: 'Lista archivos con detalles y ocultos',cat: 'archivos' },
{ cmd: 'ls -lh',desc: 'Lista archivos con tamaño legible',cat: 'archivos' },
{ cmd: 'cd /ruta',desc: 'Cambia al directorio especificado',cat: 'archivos' },
{ cmd: 'pwd',desc: 'Muestra el directorio actual',cat: 'archivos' },
{ cmd: 'mkdir -p dir/sub',desc: 'Crea directorio y subdirectorios',cat: 'archivos' },
{ cmd: 'cp -r origen destino',desc: 'Copia archivos o directorios recursivamente',cat: 'archivos' },
{ cmd: 'mv origen destino',desc: 'Mueve o renombra archivos',cat: 'archivos' },
{ cmd: 'rm -rf directorio',desc: 'Elimina directorio y contenido sin confirmación',cat: 'archivos', peligroso: true },
{ cmd: 'touch archivo.txt',desc: 'Crea un archivo vacío o actualiza fecha',cat: 'archivos' },
{ cmd: 'cat archivo',desc: 'Muestra el contenido de un archivo',cat: 'archivos' },
{ cmd: 'less archivo',desc: 'Muestra archivo con scroll (q para salir)',cat: 'archivos' },
{ cmd: 'head -n 20 archivo',desc: 'Muestra las primeras 20 líneas',cat: 'archivos' },
{ cmd: 'tail -f archivo.log',desc: 'Sigue el archivo en tiempo real',cat: 'archivos' },
{ cmd: 'df -h',desc: 'Muestra uso de disco por partición',cat: 'archivos' },
{ cmd: 'du -sh directorio',desc: 'Tamaño total de un directorio',cat: 'archivos' },


{ cmd: 'ip a',desc: 'Muestra interfaces de red y direcciones IP',cat: 'redes' },
{ cmd: 'ip r',desc: 'Muestra tabla de enrutamiento',cat: 'redes' },
{ cmd: 'ping -c 4 host', desc: 'Envía 4 paquetes ICMP al host', cat: 'redes' },
{ cmd: 'traceroute host', desc: 'Traza la ruta hasta el host', cat: 'redes' },
{ cmd: 'ss -tuln', desc: 'Lista puertos abiertos (TCP/UDP)', cat: 'redes' },
{ cmd: 'netstat -tulnp', desc: 'Puertos abiertos con proceso asociado', cat: 'redes' },
{ cmd: 'nmap -sV host', desc: 'Escanea versiones de servicios en el host', cat: 'redes' },
{ cmd: 'curl -I url', desc: 'Muestra cabeceras HTTP de una URL', cat: 'redes' },
{ cmd: 'wget url', desc: 'Descarga un archivo desde una URL', cat: 'redes' },
{ cmd: 'ssh user@host', desc: 'Conecta por SSH al host remoto', cat: 'redes' },
{ cmd: 'scp archivo user@host:/ruta', desc: 'Copia archivo por SSH', cat: 'redes' },
{ cmd: 'ufw status', desc: 'Estado del firewall UFW', cat: 'redes' },
{ cmd: 'ufw allow 22/tcp', desc: 'Permite tráfico en puerto 22 TCP', cat: 'redes' },

  // permisos
{ cmd: 'chmod 755 archivo', desc: 'rwxr-xr-x — dueño total, resto lectura/ejecución', cat: 'permisos' },
{ cmd: 'chmod 644 archivo', desc: 'rw-r--r-- — dueño lee/escribe, resto solo lee', cat: 'permisos' },
{ cmd: 'chmod +x script.sh', desc: 'Agrega permiso de ejecución', cat: 'permisos' },
{ cmd: 'chown user:group archivo', desc: 'Cambia dueño y grupo del archivo', cat: 'permisos' },
{ cmd: 'chown -R user directorio', desc: 'Cambia dueño recursivamente', cat: 'permisos' },
{ cmd: 'umask 022', desc: 'Define permisos por defecto al crear archivos', cat: 'permisos' },
{ cmd: 'sudo -l', desc: 'Lista comandos que puede ejecutar con sudo', cat: 'permisos' },

  // procesos
{ cmd: 'ps aux', desc: 'Lista todos los procesos del sistema', cat: 'procesos' },
{ cmd: 'ps aux | grep nombre', desc: 'Filtra procesos por nombre', cat: 'procesos' },
{ cmd: 'top', desc: 'Monitor de procesos en tiempo real', cat: 'procesos' },
{ cmd: 'htop', desc: 'Monitor interactivo mejorado (requiere htop)', cat: 'procesos' },
{ cmd: 'kill PID', desc: 'Termina proceso por su PID', cat: 'procesos' },
{ cmd: 'kill -9 PID', desc: 'Fuerza terminación del proceso', cat: 'procesos', peligroso: true },
{ cmd: 'killall nombre', desc: 'Termina todos los procesos con ese nombre', cat: 'procesos' },
{ cmd: 'jobs', desc: 'Lista procesos en segundo plano', cat: 'procesos' },
{ cmd: 'bg %1', desc: 'Envía proceso a segundo plano', cat: 'procesos' },
{ cmd: 'fg %1', desc: 'Trae proceso a primer plano', cat: 'procesos' },
{ cmd: 'nohup comando &', desc: 'Ejecuta proceso que sobrevive al logout', cat: 'procesos' },
{ cmd: 'systemctl status servicio', desc: 'Estado de un servicio systemd', cat: 'procesos' },
{ cmd: 'systemctl restart servicio', desc: 'Reinicia un servicio systemd', cat: 'procesos' },

  // sistema
{ cmd: 'uname -a', desc: 'Info completa del kernel y sistema', cat: 'sistema' },
{ cmd: 'lsb_release -a', desc: 'Versión de la distribución Linux', cat: 'sistema' },
{ cmd: 'uptime', desc: 'Tiempo encendido y carga del sistema', cat: 'sistema' },
{ cmd: 'free -h', desc: 'Uso de memoria RAM y swap', cat: 'sistema' },
{ cmd: 'lscpu', desc: 'Información del procesador', cat: 'sistema' },
{ cmd: 'lsblk', desc: 'Lista dispositivos de almacenamiento', cat: 'sistema' },
{ cmd: 'lsusb', desc: 'Lista dispositivos USB conectados', cat: 'sistema' },
{ cmd: 'dmesg | tail -20', desc: 'Últimos mensajes del kernel', cat: 'sistema' },
{ cmd: 'journalctl -xe', desc: 'Logs del sistema con errores recientes', cat: 'sistema' },
{ cmd: 'crontab -e', desc: 'Edita tareas programadas del usuario', cat: 'sistema' },
{ cmd: 'history | grep cmd', desc: 'Busca en el historial de comandos', cat: 'sistema' },
{ cmd: 'alias ll="ls -la"', desc: 'Crea un alias de comando', cat: 'sistema' },
{ cmd: 'env', desc: 'Muestra variables de entorno', cat: 'sistema' },
{ cmd: 'export VAR=valor', desc: 'Define una variable de entorno', cat: 'sistema' },
{ cmd: 'shutdown -h now', desc: 'Apaga el sistema inmediatamente', cat: 'sistema', peligroso: true },
{ cmd: 'reboot', desc: 'Reinicia el sistema', cat: 'sistema', peligroso: true },


{ cmd: 'find / -name "*.log"', desc: 'Busca archivos .log en todo el sistema', cat: 'busqueda' },
{ cmd: 'find . -type f -newer archivo',desc: 'Archivos más nuevos que archivo', cat: 'busqueda' },
{ cmd: 'find . -size +100M', desc: 'Archivos mayores a 100MB', cat: 'busqueda' },
{ cmd: 'grep -r "texto" .', desc: 'Busca texto recursivamente en directorio', cat: 'busqueda' },
{ cmd: 'grep -i "texto" archivo', desc: 'Busca sin distinguir mayúsculas', cat: 'busqueda' },
{ cmd: 'grep -n "texto" archivo', desc: 'Busca y muestra número de línea', cat: 'busqueda' },
{ cmd: 'grep -v "texto" archivo', desc: 'Muestra líneas que NO contienen texto', cat: 'busqueda' },
{ cmd: 'locate archivo', desc: 'Busca archivo en la base de datos del sistema', cat: 'busqueda' },
{ cmd: 'which comando', desc: 'Muestra la ruta del ejecutable', cat: 'busqueda' },
{ cmd: 'whereis comando', desc: 'Muestra ruta del binario, manual y fuente', cat: 'busqueda' },


{ cmd: 'tar -czf archivo.tar.gz dir', desc: 'Comprime directorio en .tar.gz', cat: 'compresion' },
{ cmd: 'tar -xzf archivo.tar.gz', desc: 'Extrae un archivo .tar.gz', cat: 'compresion' },
{ cmd: 'tar -tf archivo.tar.gz', desc: 'Lista contenido sin extraer', cat: 'compresion' },
{ cmd: 'zip -r archivo.zip dir', desc: 'Comprime en formato .zip', cat: 'compresion' },
{ cmd: 'unzip archivo.zip', desc: 'Extrae archivo .zip', cat: 'compresion' },
{ cmd: 'unzip -l archivo.zip', desc: 'Lista contenido del .zip', cat: 'compresion' },
{ cmd: 'gzip archivo', desc: 'Comprime archivo en .gz', cat: 'compresion' },
{ cmd: 'gunzip archivo.gz', desc: 'Descomprime archivo .gz', cat: 'compresion' },
];


let categoriaActiva  = 'todos';
let terminoBusqueda  = '';


const cuadricula    = document.getElementById('cuadricula-cmds');
const sinResultados = document.getElementById('sin-resultados');
const terminoVacio  = document.getElementById('termino-vacio');
const contadorCmds  = document.getElementById('contador-cmds');


function filtrarComandos() {
return COMANDOS.filter(c => {
    const coincideCategoria = categoriaActiva === 'todos' || c.cat === categoriaActiva;
    const termino           = terminoBusqueda.toLowerCase();
    const coincideBusqueda  = !termino
    || c.cmd.toLowerCase().includes(termino)
    || c.desc.toLowerCase().includes(termino);
    return coincideCategoria && coincideBusqueda;
    });
}

function renderizarComandos() {
const lista = filtrarComandos();
cuadricula.innerHTML = '';

if (!lista.length) {
    terminoVacio.textContent = terminoBusqueda;
    sinResultados.classList.remove('oculto');
    contadorCmds.textContent = '0 comandos';
    return;
}

sinResultados.classList.add('oculto');
contadorCmds.textContent = lista.length + ' comando' + (lista.length !== 1 ? 's' : '');

lista.forEach(c => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-cmd' + (c.peligroso ? ' peligroso' : '');
    tarjeta.innerHTML = `
    <div class="cmd-top">
        <span class="cmd-codigo">${c.cmd}</span>
        <button class="btn-copiar" data-cmd="${c.cmd}">copiar</button>
    </div>
    <div class="cmd-descripcion">${c.desc}</div>
    <div class="cmd-etiqueta">${c.cat}${c.peligroso ? ' · ⚠ peligroso' : ''}</div>
    `;
    cuadricula.appendChild(tarjeta);
    });
}



cuadricula.addEventListener('click', e => {
    const boton = e.target.closest('.btn-copiar');
    if (!boton) return;
    navigator.clipboard.writeText(boton.dataset.cmd).then(() => {
        boton.textContent = '✓ copiado';
        boton.classList.add('copiado');
        setTimeout(() => {
        boton.textContent = 'copiar';
        boton.classList.remove('copiado');
        }, 1500);
    });
});



document.getElementById('entrada-busqueda').addEventListener('input', e => {
    terminoBusqueda = e.target.value;
    renderizarComandos();
});

document.querySelectorAll('.btn-categoria').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-categoria').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoriaActiva = btn.dataset.cat;
        renderizarComandos();
    });
});



renderizarComandos();