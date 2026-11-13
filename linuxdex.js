const COMANDOS = [
    { cmd: 'ls -la', desc: 'Lista archivos con detalles y ocultos', cat: 'archivos',
        ejemplo: 'ls -la /home/usuario',
        salida: 'drwxr-xr-x  5 usuario usuario 4096 ago 30 10:12 .\ndrwxr-xr-x  3 root    root    4096 ago 12 09:00 ..\n-rw-r--r--  1 usuario usuario  220 ago 12 09:00 .bashrc\ndrwxr-xr-x  2 usuario usuario 4096 ago 30 10:00 Documentos' },
    { cmd: 'ls -lh', desc: 'Lista archivos con tamaño legible', cat: 'archivos',
        ejemplo: 'ls -lh /var/log' },
    { cmd: 'cd /ruta', desc: 'Cambia al directorio especificado', cat: 'archivos',
        ejemplo: 'cd /etc/nginx' },
    { cmd: 'pwd', desc: 'Muestra el directorio actual', cat: 'archivos',
        ejemplo: 'pwd', salida: '/home/usuario/proyectos' },
    { cmd: 'mkdir -p dir/sub', desc: 'Crea directorio y subdirectorios', cat: 'archivos',
        ejemplo: 'mkdir -p proyecto/src/assets' },
    { cmd: 'cp -r origen destino', desc: 'Copia archivos o directorios recursivamente', cat: 'archivos',
        ejemplo: 'cp -r ./fotos ./backup/fotos' },
    { cmd: 'mv origen destino', desc: 'Mueve o renombra archivos', cat: 'archivos',
        ejemplo: 'mv informe.txt informe_final.txt' },
    { cmd: 'rm -rf directorio', desc: 'Elimina directorio y contenido sin confirmación', cat: 'archivos', peligroso: true,
        ejemplo: 'rm -rf ./build' },
    { cmd: 'touch archivo.txt', desc: 'Crea un archivo vacío o actualiza fecha', cat: 'archivos',
        ejemplo: 'touch notas.txt' },
    { cmd: 'cat archivo', desc: 'Muestra el contenido de un archivo', cat: 'archivos',
        ejemplo: 'cat /etc/os-release',
        salida: 'NAME="Zorin OS"\nVERSION="18.1"\nID=zorin\nID_LIKE=ubuntu' },
    { cmd: 'less archivo', desc: 'Muestra archivo con scroll (q para salir)', cat: 'archivos',
        ejemplo: 'less /var/log/syslog' },
    { cmd: 'head -n 20 archivo', desc: 'Muestra las primeras 20 líneas', cat: 'archivos',
        ejemplo: 'head -n 20 acceso.log' },
    { cmd: 'tail -f archivo.log', desc: 'Sigue el archivo en tiempo real', cat: 'archivos',
        ejemplo: 'tail -f /var/log/nginx/error.log' },
    { cmd: 'df -h', desc: 'Muestra uso de disco por partición', cat: 'archivos',
        ejemplo: 'df -h',
        salida: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2       456G  128G  305G  30% /' },
    { cmd: 'du -sh directorio', desc: 'Tamaño total de un directorio', cat: 'archivos',
    ejemplo: 'du -sh ./node_modules' },

    { cmd: 'ip a', desc: 'Muestra interfaces de red y direcciones IP', cat: 'redes',
        ejemplo: 'ip a',
        salida: '2: wlan0: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.42/24 brd 192.168.1.255 scope global wlan0' },
    { cmd: 'ip r', desc: 'Muestra tabla de enrutamiento', cat: 'redes',
        ejemplo: 'ip r' },
    { cmd: 'ping -c 4 host', desc: 'Envía 4 paquetes ICMP al host', cat: 'redes',
        ejemplo: 'ping -c 4 8.8.8.8',
        salida: '64 bytes from 8.8.8.8: icmp_seq=1 ttl=115 time=14.2 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=115 time=13.8 ms\n--- 8.8.8.8 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss' },
    { cmd: 'traceroute host', desc: 'Traza la ruta hasta el host', cat: 'redes',
        ejemplo: 'traceroute google.com' },
    { cmd: 'ss -tuln', desc: 'Lista puertos abiertos (TCP/UDP)', cat: 'redes',
        ejemplo: 'ss -tuln' },
    { cmd: 'netstat -tulnp', desc: 'Puertos abiertos con proceso asociado', cat: 'redes',
        ejemplo: 'netstat -tulnp' },
    { cmd: 'nmap -sV host', desc: 'Escanea versiones de servicios en el host', cat: 'redes',
        ejemplo: 'nmap -sV 192.168.1.1' },
    { cmd: 'curl -I url', desc: 'Muestra cabeceras HTTP de una URL', cat: 'redes',
        ejemplo: 'curl -I https://example.com',
        salida: 'HTTP/2 200\ncontent-type: text/html; charset=UTF-8\ncontent-length: 1256' },
    { cmd: 'wget url', desc: 'Descarga un archivo desde una URL', cat: 'redes',
        ejemplo: 'wget https://ejemplo.com/archivo.zip' },
    { cmd: 'ssh user@host', desc: 'Conecta por SSH al host remoto', cat: 'redes',
        ejemplo: 'ssh josue@192.168.1.10' },
    { cmd: 'scp archivo user@host:/ruta', desc: 'Copia archivo por SSH', cat: 'redes',
        ejemplo: 'scp informe.pdf josue@servidor:/home/josue/' },
    { cmd: 'ufw status', desc: 'Estado del firewall UFW', cat: 'redes',
        ejemplo: 'ufw status',
        salida: 'Status: active\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW       Anywhere' },
    { cmd: 'ufw allow 22/tcp', desc: 'Permite tráfico en puerto 22 TCP', cat: 'redes',
    ejemplo: 'ufw allow 22/tcp' },

    { cmd: 'chmod 755 archivo', desc: 'rwxr-xr-x — dueño total, resto lectura/ejecución', cat: 'permisos',
        ejemplo: 'chmod 755 script.sh' },
    { cmd: 'chmod 644 archivo', desc: 'rw-r--r-- — dueño lee/escribe, resto solo lee', cat: 'permisos',
        ejemplo: 'chmod 644 index.html' },
    { cmd: 'chmod +x script.sh', desc: 'Agrega permiso de ejecución', cat: 'permisos',
        ejemplo: 'chmod +x deploy.sh' },
    { cmd: 'chown user:group archivo', desc: 'Cambia dueño y grupo del archivo', cat: 'permisos',
        ejemplo: 'chown josue:josue archivo.txt' },
    { cmd: 'chown -R user directorio', desc: 'Cambia dueño recursivamente', cat: 'permisos',
        ejemplo: 'chown -R josue ./proyecto' },
    { cmd: 'umask 022', desc: 'Define permisos por defecto al crear archivos', cat: 'permisos',
        ejemplo: 'umask 022' },
    { cmd: 'sudo -l', desc: 'Lista comandos que puede ejecutar con sudo', cat: 'permisos',
    ejemplo: 'sudo -l' },

    { cmd: 'ps aux', desc: 'Lista todos los procesos del sistema', cat: 'procesos',
        ejemplo: 'ps aux',
        salida: 'USER  PID  %CPU %MEM COMMAND\nroot    1   0.0  0.1 /sbin/init\nusuario 812 1.2  2.4 /usr/bin/gnome-shell' },
    { cmd: 'ps aux | grep nombre', desc: 'Filtra procesos por nombre', cat: 'procesos',
        ejemplo: 'ps aux | grep nginx' },
    { cmd: 'top', desc: 'Monitor de procesos en tiempo real', cat: 'procesos',
        ejemplo: 'top',
        salida: 'top - 10:32:04 up 3:12, 1 user, load average: 0.42, 0.31, 0.28\nPID USER  %CPU %MEM COMMAND\n812 usuario 3.1 4.2 gnome-shell' },
    { cmd: 'htop', desc: 'Monitor interactivo mejorado (requiere htop)', cat: 'procesos',
        ejemplo: 'htop' },
    { cmd: 'kill PID', desc: 'Termina proceso por su PID', cat: 'procesos',
        ejemplo: 'kill 4521' },
    { cmd: 'kill -9 PID', desc: 'Fuerza terminación del proceso', cat: 'procesos', peligroso: true,
        ejemplo: 'kill -9 4521' },
    { cmd: 'killall nombre', desc: 'Termina todos los procesos con ese nombre', cat: 'procesos',
        ejemplo: 'killall firefox' },
    { cmd: 'jobs', desc: 'Lista procesos en segundo plano', cat: 'procesos',
        ejemplo: 'jobs' },
    { cmd: 'bg %1', desc: 'Envía proceso a segundo plano', cat: 'procesos',
        ejemplo: 'bg %1' },
    { cmd: 'fg %1', desc: 'Trae proceso a primer plano', cat: 'procesos',
        ejemplo: 'fg %1' },
    { cmd: 'nohup comando &', desc: 'Ejecuta proceso que sobrevive al logout', cat: 'procesos',
        ejemplo: 'nohup python3 servidor.py &' },
    { cmd: 'systemctl status servicio', desc: 'Estado de un servicio systemd', cat: 'procesos',
        ejemplo: 'systemctl status nginx',
        salida: '● nginx.service - A high performance web server\n   Active: active (running) since hoy 08:15:02' },
    { cmd: 'systemctl restart servicio', desc: 'Reinicia un servicio systemd', cat: 'procesos',
        ejemplo: 'systemctl restart nginx' },

    { cmd: 'uname -a', desc: 'Info completa del kernel y sistema', cat: 'sistema',
        ejemplo: 'uname -a',
        salida: 'Linux equipo 6.17.0-40-generic #41-Ubuntu SMP x86_64 GNU/Linux' },
    { cmd: 'lsb_release -a', desc: 'Versión de la distribución Linux', cat: 'sistema',
        ejemplo: 'lsb_release -a' },
    { cmd: 'uptime', desc: 'Tiempo encendido y carga del sistema', cat: 'sistema',
        ejemplo: 'uptime', salida: '10:32:04 up 3:12, 1 user, load average: 0.42, 0.31, 0.28' },
    { cmd: 'free -h', desc: 'Uso de memoria RAM y swap', cat: 'sistema',
        ejemplo: 'free -h',
        salida: '              total   used   free  shared  buff/cache  available\nMem:           11Gi   4.2Gi  2.1Gi   412Mi        4.7Gi      6.3Gi' },
    { cmd: 'lscpu', desc: 'Información del procesador', cat: 'sistema',
        ejemplo: 'lscpu' },
    { cmd: 'lsblk', desc: 'Lista dispositivos de almacenamiento', cat: 'sistema',
        ejemplo: 'lsblk' },
    { cmd: 'lsusb', desc: 'Lista dispositivos USB conectados', cat: 'sistema',
        ejemplo: 'lsusb' },
    { cmd: 'dmesg | tail -20', desc: 'Últimos mensajes del kernel', cat: 'sistema',
        ejemplo: 'dmesg | tail -20' },
    { cmd: 'journalctl -xe', desc: 'Logs del sistema con errores recientes', cat: 'sistema',
        ejemplo: 'journalctl -xe' },
    { cmd: 'crontab -e', desc: 'Edita tareas programadas del usuario', cat: 'sistema',
        ejemplo: 'crontab -e' },
    { cmd: 'history | grep cmd', desc: 'Busca en el historial de comandos', cat: 'sistema',
        ejemplo: 'history | grep ssh' },
    { cmd: 'alias ll="ls -la"', desc: 'Crea un alias de comando', cat: 'sistema',
        ejemplo: 'alias ll="ls -la"' },
    { cmd: 'env', desc: 'Muestra variables de entorno', cat: 'sistema',
        ejemplo: 'env' },
    { cmd: 'export VAR=valor', desc: 'Define una variable de entorno', cat: 'sistema',
        ejemplo: 'export EDITOR=vim' },
    { cmd: 'shutdown -h now', desc: 'Apaga el sistema inmediatamente', cat: 'sistema', peligroso: true,
        ejemplo: 'shutdown -h now' },
    { cmd: 'reboot', desc: 'Reinicia el sistema', cat: 'sistema', peligroso: true,
        ejemplo: 'reboot' },

    { cmd: 'find / -name "*.log"', desc: 'Busca archivos .log en todo el sistema', cat: 'busqueda',
        ejemplo: 'find / -name "*.log" 2>/dev/null' },
    { cmd: 'find . -type f -newer archivo', desc: 'Archivos más nuevos que archivo', cat: 'busqueda',
        ejemplo: 'find . -type f -newer referencia.txt' },
    { cmd: 'find . -size +100M', desc: 'Archivos mayores a 100MB', cat: 'busqueda',
        ejemplo: 'find . -size +100M' },
    { cmd: 'grep -r "texto" .', desc: 'Busca texto recursivamente en directorio', cat: 'busqueda',
        ejemplo: 'grep -r "TODO" ./src' },
    { cmd: 'grep -i "texto" archivo', desc: 'Busca sin distinguir mayúsculas', cat: 'busqueda',
        ejemplo: 'grep -i "error" registro.log' },
    { cmd: 'grep -n "texto" archivo', desc: 'Busca y muestra número de línea', cat: 'busqueda',
        ejemplo: 'grep -n "function" script.js' },
    { cmd: 'grep -v "texto" archivo', desc: 'Muestra líneas que NO contienen texto', cat: 'busqueda',
        ejemplo: 'grep -v "DEBUG" registro.log' },
    { cmd: 'locate archivo', desc: 'Busca archivo en la base de datos del sistema', cat: 'busqueda',
        ejemplo: 'locate nginx.conf' },
    { cmd: 'which comando', desc: 'Muestra la ruta del ejecutable', cat: 'busqueda',
        ejemplo: 'which python3', salida: '/usr/bin/python3' },
    { cmd: 'whereis comando', desc: 'Muestra ruta del binario, manual y fuente', cat: 'busqueda',
        ejemplo: 'whereis python3' },


    { cmd: 'tar -czf archivo.tar.gz dir', desc: 'Comprime directorio en .tar.gz', cat: 'compresion',
        ejemplo: 'tar -czf backup.tar.gz ./proyecto' },
    { cmd: 'tar -xzf archivo.tar.gz', desc: 'Extrae un archivo .tar.gz', cat: 'compresion',
        ejemplo: 'tar -xzf backup.tar.gz' },
    { cmd: 'tar -tf archivo.tar.gz', desc: 'Lista contenido sin extraer', cat: 'compresion',
        ejemplo: 'tar -tf backup.tar.gz' },
    { cmd: 'zip -r archivo.zip dir', desc: 'Comprime en formato .zip', cat: 'compresion',
        ejemplo: 'zip -r proyecto.zip ./proyecto' },
    { cmd: 'unzip archivo.zip', desc: 'Extrae archivo .zip', cat: 'compresion',
        ejemplo: 'unzip proyecto.zip' },
    { cmd: 'unzip -l archivo.zip', desc: 'Lista contenido del .zip', cat: 'compresion',
        ejemplo: 'unzip -l proyecto.zip' },
    { cmd: 'gzip archivo', desc: 'Comprime archivo en .gz', cat: 'compresion',
        ejemplo: 'gzip registro.log' },
    { cmd: 'gunzip archivo.gz', desc: 'Descomprime archivo .gz', cat: 'compresion',
        ejemplo: 'gunzip registro.log.gz' },
];

const CLAVE_FAVORITOS = 'linuxdex_favoritos';

let favoritos = new Set(JSON.parse(localStorage.getItem(CLAVE_FAVORITOS) || '[]'));

function guardarFavoritos() {
    localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify([...favoritos]));
}

function esFavorito(cmd) {
    return favoritos.has(cmd);
}

function alternarFavorito(cmd) {
    if (favoritos.has(cmd)) favoritos.delete(cmd);
    else favoritos.add(cmd);
    guardarFavoritos();
}

const terminalSalida  = document.getElementById('terminal-salida');
const terminalEntrada = document.getElementById('terminal-entrada');
const panelTerminal   = document.getElementById('panel-terminal');
const historialTerminal = [];
let indiceHistorial = 0;

function imprimirEnTerminal(texto, clase = '') {
    const linea = document.createElement('div');
    linea.className = 'terminal-linea' + (clase ? ' ' + clase : '');
    linea.textContent = texto;
    terminalSalida.appendChild(linea);
    terminalSalida.scrollTop = terminalSalida.scrollHeight;
}

function buscarComandoSimulado(entrada) {
    const entradaLower = entrada.toLowerCase();
    const primeraPalabra = entradaLower.split(/\s+/)[0];
    const candidatos = COMANDOS.filter(c => c.cmd.toLowerCase().split(/\s+/)[0] === primeraPalabra);

    return candidatos.reduce((mejor, candidato) => {
        if (!mejor) return candidato;
        const prefijoCompartido = comando => {
            let indice = 0;
            const comandoLower = comando.toLowerCase();
            while (indice < comandoLower.length && indice < entradaLower.length && comandoLower[indice] === entradaLower[indice]) indice++;
            return indice;
        };
        return prefijoCompartido(candidato.cmd) > prefijoCompartido(mejor.cmd) ? candidato : mejor;
    }, null);
}

function ejecutarComandoSimulado(entradaCruda) {
    const entrada = entradaCruda.trim();
    if (!entrada) return;

    imprimirEnTerminal('usuario@linuxdex:~$ ' + entrada, 'terminal-prompt-eco');

    if (entrada.toLowerCase() === 'clear') {
        terminalSalida.replaceChildren();
        return;
    }

    if (entrada.toLowerCase() === 'help') {
        imprimirEnTerminal('Comandos disponibles: ' + [...new Set(COMANDOS.map(c => c.cmd.split(/\s+/)[0]))].join(', ') + ', clear, help');
        imprimirEnTerminal('Esta terminal es una simulación: no ejecuta comandos en tu sistema.', 'terminal-generico');
        return;
    }

    const encontrado = buscarComandoSimulado(entrada);
    if (!encontrado) {
        imprimirEnTerminal(`bash: ${entrada.split(/\s+/)[0]}: orden no encontrada`, 'terminal-error');
        return;
    }

    if (encontrado.salida) {
        encontrado.salida.split('\n').forEach(linea => imprimirEnTerminal(linea));
    } else {
        imprimirEnTerminal(`[simulado] ${encontrado.desc}`, 'terminal-generico');
    }
}

const botonAbrirTerminal = document.getElementById('btn-abrir-terminal');

function abrirTerminal() {
    panelTerminal.classList.remove('oculto');
    terminalEntrada.focus();
}

function cerrarTerminal() {
    panelTerminal.classList.add('oculto');
    botonAbrirTerminal.focus();
}

botonAbrirTerminal.addEventListener('click', abrirTerminal);
document.getElementById('btn-cerrar-terminal').addEventListener('click', cerrarTerminal);
document.getElementById('btn-limpiar-terminal').addEventListener('click', () => {
    terminalSalida.replaceChildren();
    terminalEntrada.focus();
});
panelTerminal.addEventListener('click', e => {
    if (e.target === panelTerminal) cerrarTerminal();
});
panelTerminal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const elementos = panelTerminal.querySelectorAll('button:not([disabled]), input:not([disabled])');
    const primero = elementos[0];
    const ultimo = elementos[elementos.length - 1];
    if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
    }
});

terminalEntrada.addEventListener('keydown', e => {
    if (e.key === 'Enter' && terminalEntrada.value.trim()) {
        const entrada = terminalEntrada.value.trim();
        if (historialTerminal[historialTerminal.length - 1] !== entrada) historialTerminal.push(entrada);
        indiceHistorial = historialTerminal.length;
        ejecutarComandoSimulado(terminalEntrada.value);
        terminalEntrada.value = '';
    } else if (e.key === 'ArrowUp' && historialTerminal.length) {
        e.preventDefault();
        indiceHistorial = Math.max(0, indiceHistorial - 1);
        terminalEntrada.value = historialTerminal[indiceHistorial];
    } else if (e.key === 'ArrowDown' && historialTerminal.length) {
        e.preventDefault();
        indiceHistorial = Math.min(historialTerminal.length, indiceHistorial + 1);
        terminalEntrada.value = historialTerminal[indiceHistorial] || '';
    }
});

let soloPeligrosos = false;
let ordenActual     = 'defecto';

document.getElementById('chk-solo-peligrosos').addEventListener('change', e => {
    soloPeligrosos = e.target.checked;
    renderizarComandos();
});

document.getElementById('select-orden').addEventListener('change', e => {
    ordenActual = e.target.value;
    renderizarComandos();
});

function ordenarComandos(lista) {
    const copia = [...lista];
    if (ordenActual === 'az') {
        copia.sort((a, b) => a.cmd.localeCompare(b.cmd));
    } else if (ordenActual === 'categoria') {
        copia.sort((a, b) => a.cat.localeCompare(b.cat) || a.cmd.localeCompare(b.cmd));
    }
    return copia;
}

const NOMBRES_CATEGORIA = {
    archivos: 'Archivos',
    redes: 'Redes',
    permisos: 'Permisos',
    procesos: 'Procesos',
    sistema: 'Sistema',
    busqueda: 'Búsqueda',
    compresion: 'Compresión'
};

let categoriaActiva  = 'todos';
let terminoBusqueda  = '';

const cuadricula     = document.getElementById('cuadricula-cmds');
const sinResultados  = document.getElementById('sin-resultados');
const mensajeSinResultados = document.getElementById('mensaje-sin-resultados');
const contadorCmds   = document.getElementById('contador-cmds');

function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function filtrarComandos() {
    return COMANDOS.filter(c => {
        const coincideCategoria = categoriaActiva === 'todos'
            || (categoriaActiva === 'favoritos' ? esFavorito(c.cmd) : c.cat === categoriaActiva);
        const camposBusqueda = [c.cmd, c.desc, c.ejemplo || '', NOMBRES_CATEGORIA[c.cat]];
        const termino = normalizarTexto(terminoBusqueda.trim());
        const coincideBusqueda = !termino
            || camposBusqueda.some(campo => normalizarTexto(campo).includes(termino));
        const coincidePeligro = !soloPeligrosos || c.peligroso === true;
        return coincideCategoria && coincideBusqueda && coincidePeligro;
    });
}

function crearBoton(clase, texto, cmd, etiqueta) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = clase;
    boton.textContent = texto;
    boton.dataset.cmd = cmd;
    boton.setAttribute('aria-label', etiqueta);
    return boton;
}

function renderizarComandos() {
    const lista = ordenarComandos(filtrarComandos());
    cuadricula.replaceChildren();
    contadorCmds.textContent = lista.length + ' comando' + (lista.length !== 1 ? 's' : '');

    if (!lista.length) {
        mensajeSinResultados.textContent = terminoBusqueda.trim()
            ? `Sin resultados para "${terminoBusqueda.trim()}".`
            : 'No hay comandos que coincidan con los filtros.';
        sinResultados.classList.remove('oculto');
        return;
    }

    sinResultados.classList.add('oculto');

    lista.forEach(c => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta-cmd' + (c.peligroso ? ' peligroso' : '');

        const top = document.createElement('div');
        top.className = 'cmd-top';
        const codigo = document.createElement('code');
        codigo.className = 'cmd-codigo';
        codigo.textContent = c.cmd;

        const acciones = document.createElement('div');
        acciones.className = 'cmd-acciones';
        const favMarcado = esFavorito(c.cmd);
        const botonFavorito = crearBoton(
            'btn-favorito' + (favMarcado ? ' activo' : ''),
            favMarcado ? '★' : '☆',
            c.cmd,
            `${favMarcado ? 'Quitar de' : 'Añadir a'} favoritos: ${c.cmd}`
        );
        botonFavorito.setAttribute('aria-pressed', String(favMarcado));
        const botonCopiar = crearBoton('btn-copiar', 'copiar', c.cmd, `Copiar comando: ${c.cmd}`);
        acciones.append(botonFavorito, botonCopiar);
        top.append(codigo, acciones);
        tarjeta.appendChild(top);

        const descripcion = document.createElement('p');
        descripcion.className = 'cmd-descripcion';
        descripcion.textContent = c.desc;
        tarjeta.appendChild(descripcion);

        if (c.ejemplo) {
            const ejemplo = document.createElement('p');
            ejemplo.className = 'cmd-ejemplo';
            const etiquetaEjemplo = document.createElement('span');
            etiquetaEjemplo.className = 'cmd-ejemplo-etiqueta';
            etiquetaEjemplo.textContent = 'ejemplo:';
            ejemplo.append(etiquetaEjemplo, document.createTextNode(` ${c.ejemplo}`));
            tarjeta.appendChild(ejemplo);
        }

        const filaInferior = document.createElement('div');
        filaInferior.className = 'cmd-fila-inferior';
        const etiqueta = document.createElement('span');
        etiqueta.className = 'cmd-etiqueta';
        etiqueta.textContent = NOMBRES_CATEGORIA[c.cat] + (c.peligroso ? ' · ⚠ peligroso' : '');
        const botonProbar = crearBoton('btn-probar', '▶ probar', c.cmd, `Probar en terminal simulada: ${c.cmd}`);
        filaInferior.append(etiqueta, botonProbar);
        tarjeta.appendChild(filaInferior);
        cuadricula.appendChild(tarjeta);
    });
}

cuadricula.addEventListener('click', e => {
    const botonCopiar = e.target.closest('.btn-copiar');
    if (botonCopiar) {
        Promise.resolve().then(() => navigator.clipboard.writeText(botonCopiar.dataset.cmd)).then(() => {
            botonCopiar.textContent = '✓ copiado';
            botonCopiar.classList.add('copiado');
            setTimeout(() => {
                botonCopiar.textContent = 'copiar';
                botonCopiar.classList.remove('copiado');
            }, 1500);
        }).catch(() => {
            botonCopiar.textContent = 'falló';
            botonCopiar.title = 'No se pudo copiar. Selecciona el comando para copiarlo manualmente.';
        });
        return;
    }

    const botonFavorito = e.target.closest('.btn-favorito');
    if (botonFavorito) {
        alternarFavorito(botonFavorito.dataset.cmd);
        renderizarComandos();
        return;
    }

    const botonProbar = e.target.closest('.btn-probar');
    if (botonProbar) {
        panelTerminal.classList.remove('oculto');
        terminalEntrada.focus();
        ejecutarComandoSimulado(botonProbar.dataset.cmd);
    }
});

const entradaBusqueda = document.getElementById('entrada-busqueda');
entradaBusqueda.addEventListener('input', e => {
    terminoBusqueda = e.target.value;
    renderizarComandos();
});

document.querySelectorAll('.btn-categoria').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-categoria').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        categoriaActiva = btn.dataset.cat;
        renderizarComandos();
    });
});

document.addEventListener('keydown', e => {
    const elementoActivo = document.activeElement;
    const estaEscribiendo = elementoActivo instanceof HTMLElement
        && (elementoActivo.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(elementoActivo.tagName));

    if (e.key === '/' && !estaEscribiendo) {
        e.preventDefault();
        entradaBusqueda.focus();
    } else if (e.key === 'Escape') {
        if (!panelTerminal.classList.contains('oculto')) {
            cerrarTerminal();
        } else if (document.activeElement === entradaBusqueda && entradaBusqueda.value) {
            entradaBusqueda.value = '';
            terminoBusqueda = '';
            renderizarComandos();
        }
    }
});

renderizarComandos();